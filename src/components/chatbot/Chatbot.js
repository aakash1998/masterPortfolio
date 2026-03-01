import React, { Component } from "react";

const systemPrompt = `RESPONSE RULES:
You are a friendly chat assistant on Aakash Patel's portfolio. 

STRICT RULES - never break these:
- Max 2-3 short sentences per reply. No exceptions.
- Never use bullet points, headers, or markdown
- If the question is vague, ask ONE clarifying question instead of listing everything
- Talk like a human in a casual conversation, not a resume
- If someone asks "how can he help", ask "What kind of problem are you trying to solve?" instead of listing everything he can do
- If ANY question is broad or vague, always ask ONE short follow-up question to understand what they actually need. Never assume and dump a list.
- Only give detailed answers when the question is specific
- Treat every conversation like a back-and-forth chat, not a presentation

ABOUT AAKASH:
- Data Engineer with 4+ years of experience building AI-powered automation systems and scalable data pipelines
- Based in Calgary, Alberta, Canada
- Email: aakash98.pt@gmail.com
- LinkedIn: linkedin.com/in/aakashpatel05

CURRENT ROLE - Data Engineer at Avenue Living (July 2025 - Present):
- Built agentic AI pipeline using Bing Grounding Search to scrape advisor data and push into HubSpot — fully automated
- Integrated Azure AI Foundry with Claude LLM to auto-generate documentation on every code release, updates Confluence automatically
- Cut daily operational costs by 73% through intelligent scraping and pipeline optimization (from $150+/day to under $40/day)
- Manages CI/CD pipelines, DevOps, and automation initiatives

PREVIOUS ROLE - Data Engineer at Citi (May 2022 - June 2025):
- Designed ETL pipelines using Azure Data Factory, Databricks, PySpark
- Built real-time pipelines with Azure Event Hubs and Stream Analytics
- Built Star/Snowflake schema models in Azure Synapse for regulatory reporting
- Created Power BI dashboards, automated deployments via Azure DevOps CI/CD

SKILLS:
- AI & GenAI: Agentic AI, LLM Integration (Claude, OpenAI), Azure OpenAI, Azure AI Foundry, Copilot Studio, RAG, Prompt Engineering
- Cloud: Azure (ADF, Databricks, Synapse, Functions, Event Hubs), AWS (Glue, EMR, Redshift, Lambda)
- Data Engineering: Spark, PySpark, Kafka, Snowflake, ETL/ELT, Data Warehousing
- ML/NLP: Scikit-learn, TF-IDF, Classification Models, Feature Engineering
- Programming: Python, SQL, Pandas
- Tools: Power BI, Qlik, Git, Azure DevOps

PROJECTS:
- Agentic Advisor Data Scraper: Uses Bing Grounding Search to find company websites, extract advisor data, push to HubSpot automatically
- Automated LinkedIn Content Generator: Searches trending topics, generates posts with Claude, refines with OpenAI, auto-publishes via LinkedIn API
- AI-Powered Release Documentation: Azure AI Foundry + Claude LLM auto-generates release notes and updates Confluence on every deployment
- Kolena AI PDF Pipeline: Automated document intelligence — PDFs dropped in SharePoint auto-trigger extraction, ETL, and dashboard updates
- Rental Market Web Scraper: Sequentum-based scraper, cut costs 73%
- Fake News Classifier: NLP classifier using TF-IDF, Logistic Regression, Random Forest

EDUCATION:
- Master's in Big Data Analytics — Trent University (2021-2022)
- Bachelor's in Computer Engineering — A.D. Patel Institute of Technology

PUBLICATIONS:
- Indian Paper Currency Detection using OpenCV3, Python and Digital Image Processing

Be friendly, concise, and helpful. If asked about Aakash's availability or hiring, encourage them to reach out via email or LinkedIn.`;

const styles = {
  floatingBtn: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "#1F3864",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    zIndex: 1000,
    fontSize: "24px",
  },
  chatWindow: {
    position: "fixed",
    bottom: "100px",
    right: "30px",
    width: "350px",
    height: "480px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#1F3864",
    padding: "16px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "bold",
  },
  headerSub: {
    margin: 0,
    fontSize: "11px",
    opacity: 0.8,
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  userMsg: {
    alignSelf: "flex-end",
    backgroundColor: "#1F3864",
    color: "white",
    padding: "8px 12px",
    borderRadius: "12px 12px 2px 12px",
    maxWidth: "80%",
    fontSize: "13px",
    lineHeight: "1.4",
  },
  botMsg: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f4f8",
    color: "#222",
    padding: "8px 12px",
    borderRadius: "12px 12px 12px 2px",
    maxWidth: "80%",
    fontSize: "13px",
    lineHeight: "1.4",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #eee",
    gap: "8px",
  },
  input: {
    flex: 1,
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    fontSize: "13px",
    outline: "none",
  },
  sendBtn: {
    backgroundColor: "#1F3864",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      messages: [
        { role: "assistant", content: "Hi! I'm Aakash's AI assistant. Ask me anything about his experience, projects, or skills — or any general AI/tech questions!" }
      ],
      input: "",
      loading: false,
    };
    this.messagesEndRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.messagesEndRef.current) {
      this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  toggleChat = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  handleSend = async () => {
    const { input, messages } = this.state;
    if (!input.trim() || this.state.loading) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    this.setState({ messages: newMessages, input: "", loading: true });

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_ANTHROPIC_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          system: systemPrompt,
          messages: newMessages,
        }),
      });

      const data = await response.json();
      const botReply = data.content[0].text;
      this.setState(prev => ({
        messages: [...prev.messages, { role: "assistant", content: botReply }],
        loading: false,
      }));
    } catch (err) {
      this.setState(prev => ({
        messages: [...prev.messages, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }],
        loading: false,
      }));
    }
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") this.handleSend();
  };

  render() {
    const { isOpen, messages, input, loading } = this.state;
    return (
      <>
        {isOpen && (
          <div style={styles.chatWindow}>
            <div style={styles.header}>
              <div>
                <p style={styles.headerTitle}>Aakash's AI Assistant</p>
                <p style={styles.headerSub}>Ask me anything!</p>
              </div>
              <button style={styles.closeBtn} onClick={this.toggleChat}>✕</button>
            </div>
            <div style={styles.messages}>
              {messages.map((msg, i) => (
                <div key={i} style={msg.role === "user" ? styles.userMsg : styles.botMsg}>
                  {msg.content}
                </div>
              ))}
              {loading && <div style={styles.botMsg}>Typing...</div>}
              <div ref={this.messagesEndRef} />
            </div>
            <div style={styles.inputArea}>
              <input
                style={styles.input}
                value={input}
                onChange={e => this.setState({ input: e.target.value })}
                onKeyDown={this.handleKeyDown}
                placeholder="Ask me anything..."
              />
              <button style={styles.sendBtn} onClick={this.handleSend}>➤</button>
            </div>
          </div>
        )}
        <button style={styles.floatingBtn} onClick={this.toggleChat}>
          {isOpen ? "✕" : "💬"}
        </button>
      </>
    );
  }
}

export default Chatbot;
