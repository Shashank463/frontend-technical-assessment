import { useState } from "react"
import ReactFlow, {
    addEdge,
    Background,
    Controls,
    MiniMap,
} from "reactflow"
import "reactflow/dist/style.css"
import nodeTypes from "./constants/nodeTypes"
import { parsePipeline } from "./hooks/usePipelineParser"

export default function App() {
    const [nodes, setNodes] = useState([
        { id: "1", type: "input", position: { x: 90, y: 100 }, data: {} },
        { id: "2", type: "text", position: { x: 430, y: 100 }, data: {} },
        { id: "3", type: "output", position: { x: 750, y: 100 }, data: {} },
    ])

    const [edges, setEdges] = useState([])

    const addNode = type => {
        setNodes(nds => {
            const sameTypeCount = nds.filter(n => n.type === type).length

            const xMap = {
                input: 100,
                text: 450,
                output: 800,
            }

            return [
                ...nds,
                {
                    id: `${type}-${nds.length + 1}`,
                    type,
                    position: {
                        x: xMap[type],
                        y: 100 + sameTypeCount * 140,
                    },
                    data: {},
                },
            ]
        })
    }


    const onConnect = params =>
        setEdges(eds =>
            addEdge(
                {
                    ...params,
                    animated: true,
                    style: { strokeWidth: 2 },
                },
                eds
            )
        )

    const onParse = async () => {
        const result = await parsePipeline(nodes, edges)
        alert(
            `Nodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag}`
        )
    }

    return (
        <div style={{ width: "100vw", height: "100vh" }}>

            <div
                style={{
                    position: "absolute",
                    left: 20,
                    top: 20,
                    zIndex: 10,
                    display: "flex",
                    gap: 10,
                }}
            >
                <button onClick={() => addNode("input")}>+ Input</button>
                <button onClick={() => addNode("text")}>+ Text</button>
                <button onClick={() => addNode("output")}>+ Output</button>
            </div>


            <button
                onClick={onParse}
                style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    zIndex: 10,
                    padding: "10px 25px",
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(37,99,235,0.35)",
                }}
            >
                Parse Pipeline
            </button>



            <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                nodesDraggable={false}
                nodesConnectable
            >


                <MiniMap />
                <Controls />
                <Background gap={15} />
            </ReactFlow>
        </div>
    )
}
