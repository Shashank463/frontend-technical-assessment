import BaseNode from "./BaseNode"

export default function OutputNode() {
    return (
        <BaseNode title="Output" inputs={["input"]}>
            <div
                style={{
                    padding: "10px",
                    borderRadius: 8,
                    background: "#020617",
                    border: "1px solid #1e293b",
                    color: "#94a3b8",
                    textAlign: "center"
                }}
            >
                Output
            </div>
        </BaseNode>
    )
}
