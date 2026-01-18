import { useState } from "react"
import BaseNode from "./BaseNode"

export default function LLMNode({ data }) {
    const [model, setModel] = useState(data.model || "gpt-4")

    return (
        <BaseNode
            title="LLM"
            inputs={["prompt"]}
            outputs={["response"]}
        >
            <select
                value={model}
                onChange={e => {
                    setModel(e.target.value)
                    data.model = e.target.value
                }}
                style={{
                    width: "100%",
                    padding: 6,
                    borderRadius: 6,
                    background: "#1a1a1a",
                    border: "1px solid #333",
                    color: "#fff"
                }}
            >
                <option value="gpt-4">GPT-4</option>
                <option value="gpt-3.5">GPT-3.5</option>
            </select>
        </BaseNode>
    )
}
