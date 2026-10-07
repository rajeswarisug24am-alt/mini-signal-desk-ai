# Mini Signal Desk AI Agent

AI-powered customer feedback intelligence dashboard that analyzes customer feedback, identifies recurring problems, assigns priorities, and provides answers through an AI agent.

## Project Overview

Mini Signal Desk is a full-stack AI agent application designed to help teams understand customer feedback quickly.

Instead of manually reading every feedback message, the system analyzes feedback data, detects common themes, calculates issue priority, retrieves relevant feedback, and uses a local Large Language Model to generate useful responses.

## Key Features

* Customer feedback ingestion from CSV
* Automatic feedback theme detection
* Issue priority classification
* Feedback search and retrieval
* AI-powered question answering
* Local LLM using Qwen 2.5
* FastAPI backend
* React + TypeScript frontend
* Interactive Signal Desk dashboard
* Real-time communication between frontend and AI backend
* No external LLM API key required

## System Architecture

```text
Customer Feedback CSV
        |
        v
Feedback Processing
        |
        v
Theme Detection
        |
        v
Priority Analysis
        |
        v
AI Agent
        |
        v
Qwen 2.5 Local LLM
        |
        v
FastAPI Backend
        |
        v
React + TypeScript Dashboard
```

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* CSS

### Backend

* Python
* FastAPI
* Uvicorn

### AI / Machine Learning

* Ollama
* Qwen 2.5 3B
* Rule-based feedback analysis
* Scikit-learn

### Data

* CSV
* Python CSV processing

## AI Agent Workflow

1. User enters a question in the Signal Desk.
2. The FastAPI backend receives the question.
3. The agent identifies the relevant feedback operation.
4. The agent retrieves information from the feedback dataset.
5. Feedback themes and priorities are calculated.
6. The retrieved information is provided as context to the local Qwen model.
7. Qwen generates the final response.
8. The response is displayed in the React dashboard.

## Example Questions

You can ask the Signal Desk:

* Which problems have the highest priority?
* What are the main upload problems?
* What are customers saying about the dashboard?
* Give me a summary of the customer issues.
* Which customer problems should the team focus on?

## Current Feedback Themes

The sample dataset contains customer feedback related to:

* File Upload Problems
* Dashboard Usability
* Performance Problems
* Customer Support

## Project Structure

```text
mini-signal-desk-ai/
│
├── Data/
│   └── feedback.csv
│
├── backend/
│   ├── agent.py
│   ├── main.py
│   ├── tools.py
│   └── test_agent.py
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/rajeswarisug24am-alt/mini-signal-desk-ai.git
cd mini-signal-desk-ai
```

### 2. Install Python Dependencies

```bash
pip install fastapi uvicorn ollama python-dotenv scikit-learn
```

### 3. Install Ollama

Install Ollama from the official website:

https://ollama.com/

Then download the Qwen model:

```bash
ollama pull qwen2.5:3b
```

### 4. Start the Backend

Open a terminal:

```bash
cd backend
python -m uvicorn main:app --reload --port 8001
```

Backend:

```text
http://127.0.0.1:8001
```

### 5. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown by Vite, usually:

```text
http://localhost:5173
```

## Security

Environment variables and local configuration files are excluded using `.gitignore`.

No API keys or private credentials are stored in this repository.

## Future Improvements

* ML-based semantic theme clustering
* Confidence scoring
* Dynamic dashboard statistics
* More advanced retrieval
* Additional feedback sources
* Automated data ingestion pipelines
* Agent tool calling
* n8n workflow automation
* Cloud deployment
* Production database integration

## Project Goal

This project demonstrates how an AI agent can combine data processing, retrieval tools, a local LLM, backend APIs, and a modern frontend to convert raw customer feedback into actionable product signals.

## Author

Rajii

AI & Machine Learning Student

## GitHub

https://github.com/rajeswarisug24am-alt/mini-signal-desk-ai
