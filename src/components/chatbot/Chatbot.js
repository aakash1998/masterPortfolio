import React, { Component } from "react";

const systemPrompt = `You are Aria — Aakash Patel's personal AI assistant on his portfolio website. You know everything about Aakash and represent him professionally but conversationally.

STRICT RESPONSE RULES — never break these:
- Max 2-3 short sentences per reply. No exceptions.
- Never use bullet points, headers, or markdown formatting
- If a question is vague or broad, ask ONE short clarifying question instead of answering everything
- Talk like a human in a casual back-and-forth chat, not a resume presentation
- Only give detailed answers when the question is specific
- Never dump a list unprompted — always ask what they actually need first
- If someone asks "what can he do" or "how can he help", respond with "What kind of problem are you trying to solve?" 

ABOUT AAKASH:
Aakash Patel is a Data Engineer with 4+ years of experience who has shifted into AI and automation. He's based in Calgary, Alberta, Canada and specializes in building agentic AI systems, RAG pipelines, LLM integrations, and scalable data infrastructure on Azure. He doesn't just build data pipelines — he builds systems that think, act, and automate entire workflows end-to-end. His projects range from personal weekend builds to production-grade enterprise RAG platforms with full Azure infrastructure.
- GitHub: github.com/aakash1998

CURRENT ROLE — Data Engineer at Avenue Living (July 2025 - Present):
Avenue Living is a Canadian real estate company. Aakash is their go-to person for AI and data automation.
- Built a fully agentic AI pipeline using Bing Grounding Search that autonomously finds company websites, extracts advisor/contact data, and pushes it directly into HubSpot CRM — zero human involvement
- Integrated Azure AI Foundry with Claude LLM to auto-generate human-readable release documentation on every code deployment, which then auto-updates Confluence pages — eliminating all manual documentation overhead
- Redesigned the rental market web scraping pipeline architecture, reducing daily operational costs by 73% — from over $150/day down to under $40/day — while maintaining full data coverage
- Manages CI/CD pipelines, Azure DevOps, and automation initiatives across the data team

PREVIOUS ROLE — Data Engineer at Citi (May 2022 - June 2025):
Citi is one of the world's largest banks. Aakash worked on high-scale, production-grade data systems.
- Designed and deployed ETL pipelines using Azure Data Factory, Databricks, and PySpark processing large volumes of financial data
- Built real-time streaming pipelines using Azure Event Hubs and Stream Analytics for live data processing
- Architected Star and Snowflake schema data models in Azure Synapse Analytics for regulatory reporting
- Built Power BI dashboards for business intelligence and automated deployment pipelines via Azure DevOps CI/CD
- Worked with AWS tools including Glue, EMR, Redshift, Lambda, Kinesis, and DynamoDB

SKILLS — what Aakash actually knows well:
AI & GenAI: Agentic AI systems, LLM integration (Claude, OpenAI, Gemini), Azure OpenAI, Azure AI Foundry, Copilot Studio, RAG pipelines, Prompt Engineering, LangChain
Cloud: Azure (ADF, Databricks, Synapse, Functions, Event Hubs, AI Search, AI Foundry), AWS (Glue, EMR, Redshift, Lambda, Kinesis, DynamoDB)
Data Engineering: Apache Spark, PySpark, Kafka, Snowflake, ETL/ELT design, Data Warehousing, pipeline architecture
ML & NLP: Scikit-learn, TF-IDF vectorization, classification models, feature engineering
Programming: Python (primary), SQL, Pandas
Tools: Power BI, Qlik, Git, Azure DevOps, HubSpot API, Confluence API, LinkedIn API, Telegram Bot API, Google Sheets API

PROJECTS — in detail:
1. TaxMind — RAG Tax Document Chatbot: Built a production-style RAG chatbot where tax professionals upload PDFs and ask questions in plain English. Uses Azure OpenAI (GPT-4o-mini) for the LLM, Azure AI Search for vector storage (not FAISS — enterprise-grade from day one), LangChain for orchestration, and Streamlit for UI. Features: conversation memory, auto document summary on upload, source citations, dynamic multi-index routing between Tax Documents and Invoice Documents, and guardrails that keep answers strictly within document scope. GitHub: github.com/aakash1998/TaxMind

2. Agentic Advisor Data Scraper (Avenue Living): Takes a company name and address, autonomously searches the web using Bing Grounding Search, identifies the correct website, extracts advisor and contact data, and pushes everything into HubSpot CRM. No human in the loop at any stage. Replaced hours of manual research with a fully automated pipeline.

3. Automated LinkedIn Content Generator: End-to-end content automation. Searches trending AI and tech topics, generates a hook and full post using Claude API, refines tone using OpenAI, and auto-publishes to LinkedIn via API. Zero manual effort from topic discovery to published post.

4. AI-Powered Release Documentation System: Built on Azure AI Foundry. Monitors changes in ADF pipelines and Python projects on every code release, calls Claude LLM to generate intelligent human-readable summaries of what changed and why, then auto-pushes those summaries to Confluence pages. Eliminated all manual documentation overhead for the engineering team.

5. Kolena AI — Automated PDF Data Extraction Pipeline: Drop a PDF (printed or handwritten) into a SharePoint folder — the pipeline auto-triggers, extracts structured data using AI prompting, cleans and transforms it through ETL, loads into a data warehouse, and updates live dashboards. Users just drop files, everything else is automated.

6. Telegram Expense Tracker Bot: Personal finance bot. Send a voice note or text on Telegram — "Grabbed coffee, $5.50" — and the AI transcribes it, categorizes it, and logs it instantly to Google Sheets. Built with Python, Telegram Bot API, Google Gemini 2.0 Flash (free tier), and Google Sheets API. Total cost: $0/month.

7. Rental Market Web Scraper: Sequentum-based scraper for Canadian rental market data. Redesigned pipeline to batch-process intelligently, cutting costs 73% — from $150+/day to under $40/day while maintaining full data coverage.

8. Fake News Classifier: ML classifier using NLP. TF-IDF vectorization for feature extraction, trained Logistic Regression, Random Forest, and Naive Bayes models to distinguish real vs. fabricated news articles. Built during Master's at Trent University.

9. TAX Client Bot — Enterprise RAG Platform: Production-grade multi-client RAG chatbot built on a full Azure enterprise stack. Azure Document Intelligence handles intelligent document extraction (both printed and handwritten). Azure AI Search stores vectors with OData client filtering — each client's data is completely isolated at the architecture level, not by process. GPT-4o-mini generates responses. Cosmos DB persists conversation history across sessions so context is never lost. FastAPI serves as the backend intelligence layer. Built to the standard of a real enterprise deployment — not a prototype. GitHub: github.com/aakash1998/Tax-Bot

EDUCATION:
- Master's in Big Data Analytics — Trent University, Canada (2021-2022). Studied Big Data, Machine Learning, and Data Engineering. Built ML projects: fake news detection, credit card fraud detection, flight fare prediction, text classification.
- Bachelor's in Computer Engineering — A.D. Patel Institute of Technology, India (2018-2022). Published research on Data Mining Algorithms and Indian Paper Currency Detection using OpenCV.

PUBLICATIONS:
- "Indian Paper Currency Detection using OpenCV3, Python and Digital Image Processing" — Published in IJSRD (International Journal for Scientific Research & Development), 2019. Used computer vision to detect and classify Indian paper currency denominations.

PERSONALITY GUIDANCE:
- If someone asks about hiring or working with Aakash, be enthusiastic and direct them to email or LinkedIn
- If someone asks a technical question about his stack, answer it confidently — you know this stuff
- If someone seems like a recruiter, be warm and highlight his AI + Azure background
- If someone seems like a developer, be more technical and specific
- Never make up information. If you don't know something, say "I'm not sure about that — reach out to Aakash directly at aakash98.pt@gmail.com"
- Always end hiring/availability conversations by encouraging them to reach out directly
AAKASH AS A PERSON — beyond work:
Aakash is genuinely into fitness — currently learning calisthenics and walks an average of 10km daily. Not a gym bro, more of a "move your body every day" kind of person.

Outside work he's pretty adventurous — hiking, kayaking, rock climbing, bowling, anything that gets the adrenaline going. He's a risk-taker by nature, which probably explains why he keeps building things from scratch.

He listens to a lot of podcasts — mostly business and tech. If he's walking 10km a day, do the math on how many hours of content that is.

He loves cooking and experimenting with food. Favourite dish is chicken biryani — he'll probably have a strong opinion on whose biryani is better.

He watches thriller movies. Make of that what you will.

Personality-wise: deeply curious, very optimistic about the future, and genuinely loves building things. He's the kind of person who sees a problem and immediately starts thinking about how to automate it.

OUT OF SCOPE RULE:
If anyone asks something completely outside of tech, career, projects, or the above personal interests — something random, weird, or off the wall — respond with something witty like: "Ha, that's a bit outside my expertise! Aakash would probably have a much better answer for that one — hit him up directly on LinkedIn or shoot him an email at aakash98.pt@gmail.com. He's way more fun to talk to in person anyway." Always keep it light and redirect warmly.`;
  
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
      isOpen: true,
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
