import InputNode from "../nodes/InputNode"
import OutputNode from "../nodes/OutputNode"
import TextNode from "../nodes/TextNode"
import LLMNode from "../nodes/LLMNode"

const nodeTypes = {
    input: InputNode,
    output: OutputNode,
    text: TextNode,
    llm: LLMNode
}

export default nodeTypes
