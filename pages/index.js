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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  margin-left: 10px;
  margin-right: 10px;
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
        <title>Raha's portfolio.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <div className={styled.wrapper}>
        <div className={styles.navigation}>
          <div>
            <NavItem href="./projects">Projects</NavItem>
            <NavItem
              href="https://www.behance.net/rakhymzduisek"
              target="_blank"
            >
              Behance
            </NavItem>
            <NavItem href="https://drive.google.com/file/d/1q_LzANsZczw9Luv4Kou7YOiNJEvLQuqW/view?usp=sharing" target="_blank">
              Resume
            </NavItem>
          </div>

          <div className={styles.navIcons}>
            <Wrapper>
              <a
                href="https://github.com/raha-the-creator"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                target="_blank"
              >
                <img src="./github.svg" />
              </a>
            </Wrapper>
            <Wrapper>
              <a
                href="https://www.linkedin.com/in/rakhymzhan-duisek/"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                target="_blank"
              >
                <img src="./linkedin.svg" />
              </a>
            </Wrapper>
          </div>
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
              management, databases, testing, deployment, UI/UX. Experienced
              freelance developer that worked with big clients in BC, Canada and
              Kazakhstan, such as{" "}
              <a href="https://bbqchickenca.com/">
                <span style={{ textDecoration: "underline" }}>
                  bb.q chicken
                </span>
              </a>
              ,{" "}
              <a href="https://bccie.bc.ca/">
                <span style={{ textDecoration: "underline" }}>
                  BC Council for International Education
                </span>
              </a>
              ,{" "}
              <a href="https://www.seniorsservicessociety.ca/">
                <span style={{ textDecoration: "underline" }}>
                  Seniors Services Society of BC
                </span>
              </a>
              .
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
            <TechnologyCard img="./react.png" title="React.js" />
            <TechnologyCard img="./next.png" title="Next.js" />
            <TechnologyCard img="./node.png" title="Node.js" />
            <TechnologyCard img="./express.png" title="Express.js" />
            <TechnologyCard img="./mongo.png" title="MongoDB" />
            <TechnologyCard img="./mysql.png" title="MySQL" />
            <TechnologyCard img="./redux.png" title="Redux" />
            <TechnologyCard img="./git.png" title="Git" />
            <TechnologyCard img="./tailwind.png" title="Tailwind CSS" />
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
              img="./generdate.png"
              title="GenerDate"
              type="Next.js | Contentful Headless CMS | JAM stack"
              desc="A web app that allows to filter and search for date ideas in Vancouver. Features include: content management, fitler search, date ideas generator, blog postings."
              prlink="https://generdate.vercel.app/"
              prpage="https://pyrite-scooter-b10.notion.site/GenerDate-efa28558496a4593b978ebe27399b2d2"
            />
            <Line />
            <ProjectCard
              img="./qozha.png"
              title="Qozha - recipes"
              type="Next.js | Contentful Headless CMS | JAM stack"
              desc="A web app with content management functionality using Contentful and Next.js"
              prlink="https://qozha-recipes.vercel.app/"
              prpage="https://github.com/raha-the-creator/qozha-recipes"
            />
            <Line />
            <ProjectCard
              img="./maulen_website.jpg"
              title="Brillante Group"
              year="2022"
              type="Custom WordPress theme | React"
              desc="Real Estate Corporation specializing in acquisitions and development of multi-unit residential apartment buildings across Eastern Canada."
              prlink="http://brillantegroup.ca/"
            />
            <Line />
            <ProjectCard
              img="./bbq.png"
              title="BBQ Chicken"
              year="2022"
              type="Custom WordPress theme | React | Ecommerce"
              desc="BBQ Chicken is a global fast food franchise restaurants located in over 20 countries. In this project I have built pages using WordPress and React-based plugins (Gutenberg, Kadence blocks). Custom stylings were implemented with variety of methods (styling plugins, stylesheets, etc.)."
              prlink="https://bbqchickenca.com/"
              prpage="https://www.figma.com/file/s26JnChkYHqsQJcdyBxRol/Website-UI?node-id=0%3A1&t=eLptcUaaNp1M3EeG-1"
            />
            <Line />
            <ProjectCard
              img="./sss.png"
              title="Seniors Services Society of British Columbia"
              type="WordPress CMS | Advanced Custom Fields WP plugin"
              desc="Performance optimization, bugs fix, implementation of custom features ('Housing search' page, etc.)"
              prlink="https://www.seniorsservicessociety.ca/"
            />
          </div>
        </div>

        <div className={styles.footer} data-aos="fade-down" id="contact">
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
