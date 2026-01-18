import { Handle, Position } from "reactflow"
import BaseNode from "./BaseNode"

export default function TextNode({ data }) {
    return (
        <BaseNode title="Text">
            <Handle
                type="target"
                position={Position.Left}
                style={{
                    left: -20,
                    background: "#3b82f6",
                    width: 12,
                    height: 12,
                    border: "2px solid #020617",
                    zIndex: 10
                }}
            />

            <textarea
                placeholder="Write text with {{variables}}"
                onMouseDown={e => e.stopPropagation()}
                style={{
                    width: "100%",
                    height: 100,
                    background: "#020617",
                    color: "#f9fafb",
                    borderRadius: 8,
                    border: "1px solid #1e293b",
                    padding: "10px 5px",
                    resize: "none"
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
                    border: "2px solid #020617",
                    zIndex: 10
                }}
            />
        </BaseNode>
    )
}
