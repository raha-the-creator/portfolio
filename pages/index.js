import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

import ResumeButton from '../comp/Resume'
import ProfilePicture from '../comp/ProfilePic'
import TechnologyCard from '../comp/Technology'
import ProjectCard from '../comp/Project'
import SocialLink from '../comp/Social'

import React, { useState, useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

const Par = styled.p`
  font-family: 'Heebo';
  font-size: 19px;
  margin-top: 30px;
  margin-bottom: 40px;
`

const Header = styled.p`
  font-size: 33px;
  font-family: 'Heebo';
  font-weight: 300;
  margin: 0px;
  padding: 0px;
`

const Box21 = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
`

const Line = styled.div`
  margin-top: 10px;
  background-color: #E0E0E0;
  height: 1px;
`

const GraphicDesign = styled.div`

`

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

        <div className={styles.section1} data-aos="fade-down">
          <div className={styles.box1}>
            <Header>Hello, <span className={styles.name}>I am Raha!🐢</span></Header>
            <span className={styles.name}>Front-end Developer</span>
            <Par>I'm striving to join the ever-groing technology industry with an active passion for web/app development. Strong problem-solving and leadership skills from participating in multiple team projects, volunteering, and freelance development.</Par>
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
            <TechnologyCard
              img="./js.png"
              title="JavaScript"
            />
            <TechnologyCard
              img="./react.png"
              title="React/React Native"
            />
            <TechnologyCard
              img="./next.png"
              title="Next.js"
            />
            <TechnologyCard
              img="./node.png"
              title="Node.js"
            />
            <TechnologyCard
              img="./git.png"
              title="Git"
            />
            <TechnologyCard
              img="./figma.png"
              title="Figma"
            />
            <TechnologyCard
              img="./styled.png"
              title="Styled-components"
            />
            <TechnologyCard
              img="./creativesuite.png"
              title="Adobe Creative Suit"
            />
          </div>
        </div>

        <div className={styles.section3}>
          <span className={styles.name}>Featured works</span>
          <div className={styles.projects}>
            <ProjectCard
              img="./procon.png"
              title="ProCon"
              year="2022"
              type="Front-end Development"
              desc="Procon is a platform that connects developers with industry professionals early on in their development careers. Developers are tired of coding “to-do lists”, basic tutorials and coding problems. They want to get real-life experience in order to prepare themselves for industry life"
              prlink="https://idsp3-procon-test.herokuapp.com/"
              />
            <Line />
            <ProjectCard
              img="./bccie.png"
              title="BC Council for International Education"
              year="2022"
              type="UI/UX"
              desc="Redesigning and redeveloping the appearance, layout, and flow of the website. Performing updates as required, assisting with creating, publishing, and updating content for BCCIE’s website"
              prlink="https://bccie.bc.ca/"
            />
            <Line />
            <ProjectCard
              img="./farmtotable.png"
              title="Farm To Table"
              year="2021"
              type="Front-end Development and UI/UX"
              desc="First project using Next.js. I contributed a lot in designing the mockups and building them using styled-components and Next.js"
              prlink="https://farmtotable.vercel.app/"
            />
            <Line />
            <ProjectCard
              img="./oncampus.png"
              title="onCampus food delivery"
              year="2021"
              type="UI/UX"
              desc="Won 3rd place in BCIT Innovation Challenge and 3rd place at Nourishing Innovation Challenge. Designed additional service in BCIT mobile application to help students who reside in dormitory to receive their groceries on time and accordingly. Source: https://www.linkedin.com/feed/update/urn:li:activity:6820875880559185920/"
              prlink="https://www.figma.com/proto/tmangvaPSepSjvuozsMXdm/onCampus-delivery?page-id=5%3A116&node-id=21%3A1&starting-point-node-id=21%3A1"
            />
            <Line />
            <ProjectCard
              img="./wck.png"
              title="West Coast Kids Foundation"
              year="2021"
              type="Front-end Development"
              desc="Worked with WCK team to maintain WCK's website, including but not limited to its functionality and performance.
              Assisted the team in updating the website as needed.
              Made suggestions to the WCK team to improve the website and implement them as needed. Improvements included, but weren't limited to, adding helpful features, optimizing the website's performance, improving its responsiveness, and improving the user experience through conducting usability testings"
              prlink="https://www.wckfoundation.ca/"
            />
            <Line />
            <ProjectCard
              img="./westcoast.png"
              title="West Point Hotel"
              year="2021"
              type="Front-end Development"
              desc="Term project to develop website using CMS (WordPress). Developed custom theme and added additional features (360 view of the room, etc.)"
              prlink="http://hoppeyyy.com/west_point_hotel/"
            />
            <Line />
            <GraphicDesign>
              <a href="https://drive.google.com/drive/u/0/folders/1SMVWevLGsZv7Of2NI-Pd5onmGlb1KhGK"></a>
            </GraphicDesign>
          </div>
        </div>

        <div className={styles.footer} data-aos="fade-down">
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
  )
}
