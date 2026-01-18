Frontend Technical Assessment – Pipeline Builder
Overview

This project is a node-based pipeline builder developed as part of a frontend technical assessment.
It allows users to visually create pipelines by adding nodes, connecting them, and validating the pipeline structure.

The focus of the project is on:

Clean node abstraction

Dynamic UI behavior

Graph-based thinking

Frontend–backend integration

Directed Acyclic Graph (DAG) validation

Features

1. Node Abstraction

All nodes are built using a shared BaseNode component.
This ensures consistent styling, handle placement, and behavior across all node types.

Implemented node types:

Input Node – entry point for data

Text Node – text transformation using template variables

Output Node – final destination of the pipeline

This abstraction makes it easy to add new node types in the future.

2. Dynamic Text Node Logic

The Text node supports template variables using double curly brackets.

Example:

hello {{value}}

Behavior:

The Text node scans for variables written in {{ }} format

For each variable, a corresponding input handle is created automatically

Duplicate variables do not create duplicate handles

This allows upstream nodes to connect dynamically

This pattern mirrors real-world workflow and prompt templating systems.

3. Visual Pipeline Builder

Nodes are added dynamically through UI controls

Nodes are arranged in a column-based layout:

Inputs on the left

Text nodes in the center

Outputs on the right

Connections are animated and directional

Arrow markers indicate data flow direction

This layout ensures clarity and avoids overlapping or cluttered graphs.

4. Backend Integration & DAG Validation

The frontend sends the pipeline structure (nodes and edges) to a FastAPI backend.

The backend:

Counts the number of nodes

Counts the number of edges

Validates whether the pipeline is a Directed Acyclic Graph (DAG)

The result is displayed to the user in a simple alert.

Example output:

Nodes: 3
Edges: 2
Is DAG: true

Tech Stack
Frontend

React

Vite

React Flow

JavaScript

CSS

Backend

Python

FastAPI

Uvicorn

Project Structure
frontend/
└── src/
├── nodes/
│ ├── BaseNode.jsx
│ ├── InputNode.jsx
│ ├── TextNode.jsx
│ └── OutputNode.jsx
├── constants/
│ └── nodeTypes.js
├── hooks/
│ └── usePipelineParser.js
└── App.jsx

backend/
└── main.py

Running the Project
Backend
cd backend
python -m uvicorn main:app --reload

Backend URL:

http://127.0.0.1:8000

API documentation:

http://127.0.0.1:8000/docs

Frontend
cd frontend
npm install
npm run dev

Frontend URL:

http://localhost:5173

Testing
Frontend

Verified dynamic node creation

Verified animated connections with arrow direction

Verified dynamic input handles in the Text node

Ensured clean layout without overlapping nodes

Backend

Tested /pipelines/parse endpoint

Verified node and edge counts

Tested cyclic and acyclic pipelines for DAG validation

Design Decisions

A column-based layout was chosen instead of free dragging to ensure clarity and predictability.

Template variables ({{variable}}) were used to represent dynamic data dependencies.

The backend focuses on validation rather than execution, keeping responsibilities clearly separated.

Node abstraction keeps the system extensible and maintainable.

Conclusion

This project demonstrates:

Strong React component design

Practical use of graph-based UI libraries

Dynamic UI behavior

Clean frontend–backend integration

Attention to usability and clarity

The pipeline builder is designed to be easily extendable for future enhancements such as execution engines or additional node types.
