import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import ProjectCard from '../comp/Project'
import SocialLink from '../comp/Social'

import React, { useState, useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

const Line = styled.div`
  margin-top: 10px;
  background-color: #E0E0E0;
  height: 1px;
`

export default function Projects() {
    return (
        <div>

            <div className={styles.prHeader}>
                <span className={styles.name}>All projects</span>
            </div>

            <div className={styles.section3}>
                <div className={styles.projects}>
                    <ProjectCard
                        img="./procon.png"
                        title="ProCon"
                        year="2022"
                        type="Front-end Development"
                        desc="Procon is a platform that connects developers with industry professionals early on in their development careers. Developers are tired of coding “to-do lists”, basic tutorials and coding problems. They want to get real-life experience in order to prepare themselves for industry life. I have worked on front-end part of this project (Dashboard, Project Page, components, etc.)"
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
                    See all projects
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
                    <ProjectCard
                        img="./canadacomputers.png"
                        title="Canada Computers"
                        year="2020"
                        type="UI/UX"
                        desc="Rapid prototyping and complete redesign of Canada Computers. I have contributed into a creating low and high fidelity testings which later on been taken into creating final version of the website."
                        prlink="https://www.figma.com/proto/OvgIZAjwznDuaAyAy7p8mh/Canada-Computers-Redesign?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2"
                    />
                    <Line />
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
    )
}