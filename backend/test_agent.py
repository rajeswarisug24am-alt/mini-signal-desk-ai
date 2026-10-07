from agent import agent


print("Mini Signal Desk Agent")
print("----------------------")

while True:

    question = input("\nAsk Signal Desk: ")

    if question.lower() == "exit":
        print("Agent stopped.")
        break

    agent(question)