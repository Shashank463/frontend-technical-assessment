import { Handle, Position } from "reactflow"
import BaseNode from "./BaseNode"

export default function InputNode({ data }) {
    return (
        <BaseNode title="Input">
            <input
                onMouseDown={e => e.stopPropagation()}
                placeholder="Enter value"
                style={{
                    width: "100%",
                    padding: "10px 5px",
                    borderRadius: 8,
                    background: "#020617",
                    color: "#f9fafb",
                    border: "1px solid #1e293b"
                }}
            />

            <Handle
                type="source"
                position={Position.Right}
                style={{
                    right: -20,
                    background: "#22c55e",
                    width: 12,
                    height: 12,
                    border: "2px solid #020617"
                }}
            />
        </BaseNode>
    )
}
