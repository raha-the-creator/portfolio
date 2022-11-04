import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import ResumeButton from "../comp/Resume";
import ProfilePicture from "../comp/ProfilePic";
import TechnologyCard from "../comp/Technology";
import ProjectCard from "../comp/Project";
import SocialLink from "../comp/Social";

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Par = styled.p`
  font-family: "Heebo";
  font-size: 19px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Header = styled.p`
  font-size: 33px;
  font-family: "Heebo";
  font-weight: 300;
  margin: 0px;
  padding: 0px;
`;

const Box21 = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
`;

const Line = styled.div`
  margin-top: 10px;
  background-color: #e0e0e0;
  height: 1px;
`;

const GraphicDesign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GraphicButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #42a7e8;
  padding: 10px;
  margin-top: 20px;
  width: 320px;
  font-family: "Heebo";
  font-size: 22px;
  color: white;
  border-radius: 10px;
`;

const Thumbnail = styled.img`
  content:url('./thumbnail.jpg);

`;

const NavItem = styled.a`
  font-size: 21px;
  font-weight: 600;
  margin-right: 5px;
  margin-left: 30px;
`;

const OtherProject = styled.a`
  margin-top: 20px;
  font-family: "Heebo";
  font-weight: 500;
  border: 1px solid #142850;
  color: #142850;
  padding: 10px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 15px;
`;

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Raha's portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className={styled.wrapper}>
        <div className={styles.navigation}>
          <NavItem href="./projects">Projects</NavItem>
          <NavItem href="https://www.behance.net/rakhymzduisek" target="_blank">
            Behance
          </NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </div>

        <div className={styles.section1} data-aos="fade-down">
          <div className={styles.box1}>
            <Header>
              Hello, <span className={styles.name}>I am Raha!🐢</span>
            </Header>
            <span className={styles.name}>Web Developer/UI Designer.</span>
            <Par>
              Proficient web developer with 2+ years of experience in corporate
              and start-up environments. Proven knowledge and experience in web
              application development, requirements gathering, stakeholders
              management, databases, testing, deployment, UI/UX.
            </Par>
            <Par>
              Experienced freelance developer that worked with big clients in
              BC, Canada and Kazakhstan, such as bb.q chicken, BC Council for
              International Education, Seniors Services Society.
            </Par>
            <ResumeButton />
          </div>

          <div className={styles.box2}>
            <ProfilePicture />
          </div>
        </div>

        <div className={styles.section2} data-aos="fade-down">
          <Box21>
            <span className={styles.name}>My Toolkit👨‍💻</span>
          </Box21>

          <div className={styles.cards}>
            <TechnologyCard img="./js.png" title="JavaScript" />
            <TechnologyCard img="./ts.png" title="TypeScript" />
            <TechnologyCard img="./react.png" title="React/React Native" />
            <TechnologyCard img="./next.png" title="Next.js" />
            <TechnologyCard img="./node.png" title="Node.js" />
            <TechnologyCard img="./express.png" title="Express.js" />
            <TechnologyCard img="./mongo.png" title="MongoDB" />
            <TechnologyCard img="./php.png" title="PHP" />
            <TechnologyCard img="./mysql.png" title="MySQL" />
            <TechnologyCard img="./git.png" title="Git" />
            <TechnologyCard img="./figma.png" title="Figma" />
            <TechnologyCard img="./sass.png" title="SASS" />
          </div>
        </div>

        <div className={styles.prHeader}>
          <span className={styles.name}>Featured projects</span>
        </div>

        <div className={styles.section3} id="projects">
          <div className={styles.projects}>
            {/* <ProjectCard
              img="./Netflix clone.png"
              title="Netflix Clone"
              year="2022"
              type="React + Firebase + Tailwind CSS"
              desc="Developed a full-stack application with authentication
              system through Firebase using React.js, Tailwind CSS."
              prlink="https://netflix-react-b154e.web.app/"
              prpage="https://github.com/raha-the-creator/Netflix-clone"
            /> */}

            <ProjectCard
              img="./maulen_website.jpg"
              title="'Brillante Group' Real Estate Agency"
              year="2022"
              type="WordPress + React"
              desc="Real Estate Corporation specializing in acquisitions and development of multi-unit residential apartment buildings across Eastern Canada"
              prlink="http://18.208.245.83/"
              prpage="https://www.figma.com/proto/pYEz4vK8vSywHSkhWrronF/portfolio-website?page-id=801%3A91&node-id=801%3A98&viewport=494%2C417%2C0.22&scaling=min-zoom"
            />
            <Line />
            <ProjectCard
              img="./bbq.png"
              title="BBQ Chicken"
              year="2022"
              type="WordPress + React"
              desc="BBQ Chicken is a global fast food franchise restaurants located in over 20 countries. In this project I have built pages using WordPress and React-based plugins (Gutenberg, Kadence blocks). Custom stylings were implemented with variety of methods (styling plugins, stylesheets, etc.)."
              prlink="https://beta.bbqchickenca.com/"
              prpage="https://www.figma.com/proto/pYEz4vK8vSywHSkhWrronF/portfolio-website?page-id=253%3A68&node-id=253%3A88&viewport=241%2C48%2C0.38&scaling=min-zoom"
            />
            <Line />
            <ProjectCard
              img="./procon.png"
              title="ProCon"
              year="2022"
              type="Front-end Development"
              desc="Procon is a platform that connects developers with industry professionals early on in their development careers. Developers are tired of coding “to-do lists”, basic tutorials and coding problems. They want to get real-life experience in order to prepare themselves for industry life. I have worked on front-end part of this project (Dashboard, Project Page, components, etc.)"
              prlink="https://idsp3-procon-test.herokuapp.com/"
              prpage="https://www.figma.com/proto/pYEz4vK8vSywHSkhWrronF/portfolio-website?page-id=253%3A68&node-id=253%3A88&viewport=241%2C48%2C0.38&scaling=min-zoom"
            />
            <Line />
            <ProjectCard
              img="./bccie.png"
              title="BC Council for International Education"
              year="2022"
              type="UI/UX"
              desc="Redesigning and redeveloping the appearance, layout, and flow of the website. Performing updates as required, assisting with creating, publishing, and updating content for BCCIE’s website"
              prlink="https://www.behance.net/gallery/139453527/UIUX-redesign-for-BCCIE"
              prpage="https://www.figma.com/proto/pYEz4vK8vSywHSkhWrronF/portfolio-website?page-id=253%3A68&node-id=270%3A121&viewport=241%2C48%2C0.42&scaling=min-zoom"
            />
            <Line />
          </div>
        </div>

        <div className={styles.graphics}>
          <GraphicDesign>
            <img className={styles.thumbnail} src="./thumbnail.jpg" />
            {/* <GraphicButton href="https://www.behance.net/rakhymzduisek">View Graphic Design Projects</GraphicButton> */}
            <OtherProject
              href="https://www.behance.net/rakhymzduisek"
              target="_blank"
            >
              See Graphic Design and UI/UX projects
            </OtherProject>
          </GraphicDesign>
        </div>

        <div className={styles.footer} data-aos="fade-down" id="contact">
          <SocialLink
            img="./telegram.svg"
            title="Telegram"
            link="https://t.me/rahatherock"
          />
          <SocialLink
            img="./github.svg"
            title="GitHub"
            link="https://github.com/raha-the-creator"
          />
          <SocialLink
            img="./linkedin.svg"
            title="LinkedIn"
            link="https://www.linkedin.com/in/rakhymzhan-duisek/"
          />
        </div>
      </div>
    </div>
  );
}
