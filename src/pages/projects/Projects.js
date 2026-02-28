import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const myProjects = [
  {
    name: "Agentic Advisor Data Scraper",
    description: "Built a fully agentic AI pipeline that takes a company name and address, autonomously searches the web using Bing Grounding Search, identifies the correct company website, and extracts advisor/contact data. The extracted data is then automatically pushed into HubSpot CRM — no human in the loop at any stage. Reduced hours of manual research to zero.",
    tech: "Python • Bing Grounding Search • HubSpot API • Azure",
  },
  {
    name: "Automated LinkedIn Content Generator",
    description: "Built a fully automated content pipeline for LinkedIn. The system searches the web for trending topics in AI and tech, generates a hook and full post using Claude API, refines the tone and quality further using OpenAI, and auto-publishes directly to LinkedIn via API. From topic discovery to published post — zero manual effort, start to finish.",
    tech: "Python • Claude API • OpenAI API • LinkedIn API • Web Scraping",
  },
  {
    name: "AI-Powered Release Documentation System",
    description: "Built on Azure AI Foundry, this system automatically monitors changes in ADF pipelines and Python projects on every code release. It calls Claude LLM via API to generate intelligent, human-readable summaries of what changed and why. Those summaries are then automatically pushed to Confluence pages — eliminating all manual documentation overhead for the engineering team.",
    tech: "Azure AI Foundry • Claude LLM • Python • Confluence API • CI/CD",
  },
  {
    name: "Kolena AI — Automated PDF Data Extraction Pipeline",
    description: "Built a fully automated document intelligence pipeline using Kolena AI. The system handles both printed and handwritten PDFs dropped into a SharePoint folder — the pipeline auto-triggers, extracts structured data using enhanced AI prompting, cleans and transforms it through an ETL pipeline, loads it into a data warehouse, and serves it via live dashboards. Users simply drop files — everything else is automated.",
    tech: "Kolena AI • Python • SharePoint API • ETL • Data Warehouse • Dashboards",
  },
  {
    name: "Rental Market Web Scraper",
    description: "Built a web scraping agent using Sequentum to capture Canadian rental market data at scale. Optimized for API rate limits and cost efficiency across multiple data sources. Redesigned the pipeline architecture to batch-process requests intelligently, reducing daily operational costs by 73% — from over $150/day down to under $40/day — while maintaining full data coverage.",
    tech: "Sequentum • Python • Azure • Cost Optimization • Pipeline Architecture",
  },
  {
    name: "Fake News Classifier",
    description: "Built a machine learning classifier during my Master's at Trent University to detect fake news articles. Used NLP techniques including TF-IDF vectorization and text preprocessing to extract features from news content. Trained and evaluated multiple classification models including Logistic Regression, Random Forest, and Naive Bayes. Achieved high accuracy in distinguishing real vs. fabricated news stories.",
    tech: "Python • NLP • Scikit-learn • TF-IDF • Logistic Regression • Random Forest",
  },
];

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {myProjects.map((project, index) => {
            return (
              <Fade bottom duration={2000} distance="40px" key={index}>
                <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
                  <div style={{ padding: "20px" }}>
                    <h2 style={{ color: theme.text, marginBottom: 10 }}>{project.name}</h2>
                    <p style={{ color: theme.secondaryText, marginBottom: 15, lineHeight: 1.6 }}>{project.description}</p>
                    <p style={{ color: theme.text, fontWeight: "bold", fontSize: 13 }}>{project.tech}</p>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
        <Button
          text={"See My GitHub"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1 className="publications-heading-text" style={{ color: theme.text }}>
                  {publicationsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
