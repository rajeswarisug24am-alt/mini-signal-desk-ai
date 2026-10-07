from ollama import chat

from tools import search_feedback, find_theme, get_summary, get_priority


def agent(question):

    question_lower = question.lower()

    if (
        "upload" in question_lower
        or "pdf" in question_lower
        or "file" in question_lower
    ):

        results = search_feedback("upload")

        context = "Relevant customer feedback:\n"

        for result in results:
            context += f"- {result}\n"

        tool_used = "search_feedback"

    elif "dashboard" in question_lower:

        results = find_theme("dashboard")

        context = "Relevant customer feedback:\n"

        for result in results:
            context += f"- {result}\n"

        tool_used = "find_theme"

    elif (
        "summary" in question_lower
        or "problem" in question_lower
        or "issue" in question_lower
        or "priority" in question_lower
        or "highest" in question_lower
    ):

        summary = get_summary()

        context = "Customer feedback summary:\n"

        for theme, count in summary.items():

            priority = get_priority(count)

            context += (
                f"- {theme}: "
                f"{count} reports, "
                f"Priority: {priority}\n"
            )

        tool_used = "get_summary"

    else:

        context = "No specific tool data was found."

        tool_used = "none"

    prompt = f"""
You are the Mini Signal Desk AI Agent.

User Question:
{question}

Tool Used:
{tool_used}

Tool Result:
{context}

Answer the user's question using the tool result.

Rules:
- Be clear and concise.
- Do not invent information.
- Use only the provided customer feedback data.
"""

    response = chat(
        model="qwen2.5:3b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]