import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text" style={{ color: theme.text }}>
                  {ContactData["title"]}
                </h1>
                <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {ContactData["description"]}
                </p>
                <div style={{ marginTop: 20 }}>
                  <a href="mailto:aakash98.pt@gmail.com" style={{ textDecoration: "none" }}>
                    <div style={{ backgroundColor: theme.headerColor, padding: "12px 24px", borderRadius: 8, display: "inline-block", marginRight: 10 }}>
                      <p style={{ color: "white", margin: 0, fontWeight: "bold" }}>Email Me</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/aakashpatel05" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <div style={{ backgroundColor: "#0077B5", padding: "12px 24px", borderRadius: 8, display: "inline-block", marginRight: 10 }}>
                      <p style={{ color: "white", margin: 0, fontWeight: "bold" }}>LinkedIn</p>
                    </div>
                  </a>
                  <a href="/Aakash_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <div style={{ backgroundColor: "#28a745", padding: "12px 24px", borderRadius: 8, display: "inline-block" }}>
                      <p style={{ color: "white", margin: 0, fontWeight: "bold" }}>Download Resume</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
