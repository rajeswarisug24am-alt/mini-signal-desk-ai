from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from agent import agent


app = FastAPI(title="Mini Signal Desk AI")


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Question(BaseModel):
    question: str


@app.get("/")
def home():

    return {
        "message": "Mini Signal Desk AI Agent is running"
    }


@app.post("/ask")
def ask_agent(data: Question):

    answer = agent(data.question)

    return {
        "question": data.question,
        "answer": answer
    }