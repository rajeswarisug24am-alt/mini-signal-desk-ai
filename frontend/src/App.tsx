import { useState } from "react";
import "./App.css";

type Theme = {
  name: string;
  count: number;
  priority: "HIGH" | "MEDIUM" | "LOW";
  description: string;
};

const themes: Theme[] = [
  {
    name: "File Upload Problems",
    count: 3,
    priority: "HIGH",
    description:
      "Customers are facing problems while uploading files and PDFs.",
  },
  {
    name: "Dashboard Usability",
    count: 3,
    priority: "HIGH",
    description:
      "Customers find the dashboard confusing and difficult to navigate.",
  },
  {
    name: "Performance Problems",
    count: 3,
    priority: "HIGH",
    description:
      "Customers report slow loading and poor application performance.",
  },
  {
    name: "Customer Support",
    count: 1,
    priority: "LOW",
    description:
      "Customers reported positive experiences with support response time.",
  },
];

const feedback = [
  "The app crashes when I try to upload a file",
  "I cannot upload my PDF",
  "The new dashboard is very confusing",
  "I don't understand how to use the new dashboard",
  "The application is very slow",
  "Loading takes too much time",
  "Customer support replied very quickly",
  "PDF upload keeps failing",
  "The dashboard navigation is difficult",
  "The app takes too long to load",
];

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const highCount = themes.filter(
    (theme) => theme.priority === "HIGH"
  ).length;

  const mediumCount = themes.filter(
    (theme) => theme.priority === "MEDIUM"
  ).length;

  const lowCount = themes.filter(
    (theme) => theme.priority === "LOW"
  ).length;

  async function askAgent() {
    if (!question.trim()) {
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("http://127.0.0.1:8001/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      const data = await response.json();

      setAnswer(data.answer);
    } catch (error) {
      setAnswer(
        "Unable to connect to the AI Agent. Please make sure the FastAPI server is running."
      );
    }

    setLoading(false);
  }

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <div className="logo">
            <span className="logo-mark">S</span>
            <span>Signal Desk</span>
          </div>

          <p className="subtitle">
            AI-powered customer feedback intelligence
          </p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          AI Agent Online
        </div>
      </header>

      <main className="dashboard">

        <section className="hero">
          <div>
            <p className="eyebrow">CUSTOMER SIGNALS</p>

            <h1>Feedback Intelligence Dashboard</h1>

            <p className="hero-text">
              Monitor customer feedback, identify recurring themes and
              prioritize the issues that need attention.
            </p>
          </div>

          <div className="feedback-count">
            <span>{feedback.length}</span>
            <small>Total Feedback</small>
          </div>
        </section>


        <section className="agent-panel">

          <div className="agent-header">
            <div>
              <p className="eyebrow">AI AGENT</p>
              <h2>Ask Signal Desk</h2>
              <p>
                Ask questions about customer feedback and issues.
              </p>
            </div>

            <div className="agent-status">
              <span></span>
              Online
            </div>
          </div>


          <div className="question-box">

            <input
              type="text"
              placeholder="Example: Which problems have the highest priority?"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  askAgent();
                }
              }}
            />

            <button onClick={askAgent} disabled={loading}>
              {loading ? "Thinking..." : "Ask Agent"}
            </button>

          </div>


          {answer && (
            <div className="agent-answer">

              <div className="answer-title">
                <span>AI</span>
                <strong>Signal Desk Agent</strong>
              </div>

              <p>{answer}</p>

            </div>
          )}

        </section>


        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">⚠</div>

            <div>
              <p>High Priority</p>
              <h2>{highCount}</h2>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon medium">!</div>

            <div>
              <p>Medium Priority</p>
              <h2>{mediumCount}</h2>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon low">✓</div>

            <div>
              <p>Low Priority</p>
              <h2>{lowCount}</h2>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon total">◈</div>

            <div>
              <p>Detected Themes</p>
              <h2>{themes.length}</h2>
            </div>
          </div>

        </section>


        <section className="section-header">

          <div>
            <h2>Detected Themes</h2>
            <p>AI-identified customer feedback patterns</p>
          </div>

        </section>


        <section className="theme-grid">

          {themes.map((theme) => (

            <div className="theme-card" key={theme.name}>

              <div className="theme-top">

                <div className="theme-icon">◉</div>

                <span
                  className={`priority ${theme.priority.toLowerCase()}`}
                >
                  {theme.priority}
                </span>

              </div>


              <h3>{theme.name}</h3>

              <p className="theme-description">
                {theme.description}
              </p>


              <div className="theme-bottom">

                <div>
                  <strong>{theme.count}</strong>
                  <span> reports</span>
                </div>

                <div className="bar">

                  <div
                    className="bar-fill"
                    style={{
                      width: `${Math.min(theme.count * 25, 100)}%`,
                    }}
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </section>


        <section className="content-grid">

          <div className="panel">

            <div className="panel-header">

              <div>
                <h2>Recent Customer Feedback</h2>
                <p>Latest signals collected by the agent</p>
              </div>

              <span className="count-badge">
                {feedback.length}
              </span>

            </div>


            <div className="feedback-list">

              {feedback.map((item, index) => (

                <div className="feedback-item" key={index}>

                  <span className="feedback-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>


          <div className="panel priority-panel">

            <div className="panel-header">

              <div>
                <h2>Priority Overview</h2>
                <p>Issue distribution</p>
              </div>

            </div>


            <div className="priority-chart">

              <div className="donut">

                <div className="donut-inner">
                  <strong>{themes.length}</strong>
                  <span>Themes</span>
                </div>

              </div>

            </div>


            <div className="legend">

              <div>
                <span className="legend-dot high-dot"></span>
                <span>High</span>
                <strong>{highCount}</strong>
              </div>

              <div>
                <span className="legend-dot medium-dot"></span>
                <span>Medium</span>
                <strong>{mediumCount}</strong>
              </div>

              <div>
                <span className="legend-dot low-dot"></span>
                <span>Low</span>
                <strong>{lowCount}</strong>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;