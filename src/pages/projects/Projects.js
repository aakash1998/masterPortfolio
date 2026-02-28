import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
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
    description: "An agentic AI pipeline that takes a company name and address, searches the web using Bing Grounding Search, finds the company website, extracts advisor data, and pushes it into HubSpot — fully automated, no human in the loop.",
    tech: "Python • Bing Grounding Search • HubSpot API • Azure",
  },
  {
    name: "Automated LinkedIn Content Generator",
    description: "A fully automated content pipeline — searches the web for trending AI/tech topics, generates posts using Claude, refines with OpenAI, and auto-publishes to LinkedIn via API. Zero manual effort.",
    tech: "Python • Claude API • OpenAI API • LinkedIn API",
  },
  {
    name: "AI-Powered Release Documentation",
    description: "Built on Azure AI Foundry — detects changes in ADF and Python projects, calls Claude LLM to generate intelligent summaries, and automatically updates Confluence on every release. Eliminated all manual documentation.",
    tech: "Azure AI Foundry • Claude LLM • Python • Confluence API",
  },
  {
    name: "Rental Market Web Scraper",
    description: "Web scraping agent built with Sequentum to capture Canadian rental market data, optimized for API rate limits and cost efficiency. Reduced daily operational costs by 73% — from $150+/day to under $40/day.",
    tech: "Sequentum • Python • Azure • Cost Optimization",
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
        {publications.data.length > 0 ? (
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
        ) : null}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
