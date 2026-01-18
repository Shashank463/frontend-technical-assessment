import { Handle, Position } from "reactflow"

export default function BaseNode({
    title,
    inputs = [],
    outputs = [],
    width = 260,
    children
}) {
    return (
        <div
            style={{
                width,
                minHeight: 110,
                padding: "20px 25px",
                borderRadius: 16,
                background: "linear-gradient(180deg, #0b0b0b, #020202)",
                border: "1px solid #262626",
                color: "#fff",
                position: "relative",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                boxSizing: "border-box",
                overflow: "visible"
            }}
        >
            <div
                className="drag-handle"
                style={{
                    textAlign: "center",
                    marginBottom: 14,
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: "0.4px",
                    color: "#f9fafb",
                    cursor: "grab",
                    userSelect: "none"
                }}
            >
                {title}
            </div>


            {inputs.map((id, index) => (
                <Handle
                    key={id}
                    id={id}
                    type="target"
                    position={Position.Left}
                    style={{
                        left: -12,
                        top: "50%",
                        transform: `translateY(${index * 18 - 9}px)`,
                        width: 12,
                        height: 12,
                        background: "#60a5fa",
                        border: "2px solid #0b1220",
                        boxShadow: "0 0 0 3px rgba(96,165,250,0.25)"
                    }}
                />
            ))}

            {children}

            {outputs.map((id, index) => (
                <Handle
                    key={id}
                    id={id}
                    type="source"
                    position={Position.Right}
                    style={{
                        right: -12,
                        top: "50%",
                        transform: `translateY(${index * 18 - 9}px)`,
                        width: 12,
                        height: 12,
                        background: "#34d399",
                        border: "2px solid #042f2e",
                        boxShadow: "0 0 0 3px rgba(52,211,153,0.25)"
                    }}
                />
            ))}
        </div>
    )
}
