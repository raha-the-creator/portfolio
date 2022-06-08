import styled from "styled-components";
import React, { useState, useEffect } from 'react'
import { createMedia } from "@artsy/fresnel";

import Aos from "aos";
import "aos/dist/aos.css"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 850px;
`

const ProjectImg = styled.div`
    display: flex;
    align-items: center;
`

const Picture = styled.img`
    border-radius: 50%;
    content:url(${props => props.img});
    width: 350px;
    height: 350px;
    z-index: 1;
`

const ProjectTags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

const ProjectDesc = styled.div`
    margin: 25px;
    margin-top: 25px;
`

const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #142850;
    color: white;
    border-radius: 25px;
    padding: 6px;
    padding-left: 12px;
    padding-right: 12px;
    margin-right: 10px;
    font-family: 'Heebo';
    font-weight: 900;
`

const Type = styled.p`
    color: #8695A4;
    font-family: 'Heebo';
`

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: grey;
    border-radius: 25%;
`

const PrTitle = styled.span`
    font-size: 30px;
    font-family: 'Heebo';
    font-weight: 700;
`

const ProjectText = styled.p`
    padding: 0px;
    margin-bottom: 30px;
    font-family: 'Heebo';
    font-size: 19px;
    font-weight: 500;
`

const ProjectLink = styled.a`
    font-family: 'Heebo';
    font-weight: 500;
    background-color: #142850;
    color: white;
    padding: 10px;
    padding-left: 28px;
    padding-right: 28px;
    border-radius: 15px;
`

const ProjectPage = styled.a`
    font-family: 'Heebo';
    font-weight: 500;
    border: 1px solid #142850;
    color: #142850;
    padding: 10px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 15px;
`

const PrBtnCont = styled.div`
    display: flex;
    margin: 5px;
    padding: 0px;
`

// desktop verison //

// mobile version //
const MobileWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    flex-direction: column;
    margin: 10px;
`

const ProjectImgM = styled.div`
    display: flex;
    align-items: center;
`

const ProjectDescM = styled.div`
    padding: 25px;
    width: 400px;
    padding-left: 40px;
    padding-right: 40px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
`

const { MediaContextProvider, Media } = createMedia({
    // breakpoints values can be either strings or integers
    breakpoints: {
        sm: 0,
        md: 768,
        lg: 1024,
        xl: 1192,
    },
})

const ProjectCard = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return <>
        <MediaContextProvider data-aos="fade-down">
            <Media at="sm">
                <MobileWrapper>
                    <ProjectImgM>
                        <img src={props.img} />
                    </ProjectImgM>
                    <ProjectDescM>
                        <PrTitle>{props.title}</PrTitle>
                        <ProjectTags>
                            <Time>{props.year}</Time>
                            <Type>{props.type}</Type>
                        </ProjectTags>
                        <ProjectText>{props.desc}</ProjectText>
                        <Buttons>
                            <PrBtnCont>
                                <ProjectLink href={props.prlink} target="_blank">Demo</ProjectLink>
                            </PrBtnCont>
                            <PrBtnCont>
                                <ProjectPage href={props.prpage} target="_blank">Learn more</ProjectPage>
                            </PrBtnCont>
                        </Buttons>
                    </ProjectDescM>
                </MobileWrapper>
            </Media>

            <Media greaterThan="sm">
                <Wrapper>
                    <ProjectImg>
                        <img src={props.img} width={340} />
                    </ProjectImg>
                    <ProjectDesc>
                        <PrTitle>{props.title}</PrTitle>
                        <ProjectTags>
                            <Time>{props.year}</Time>
                            <Type>{props.type}</Type>
                        </ProjectTags>
                        <ProjectText>{props.desc}</ProjectText>

                        <Buttons>
                            <PrBtnCont>
                                <ProjectLink href={props.prlink} target="_blank">Demo</ProjectLink>
                            </PrBtnCont>
                            <PrBtnCont>
                                <ProjectPage href={props.prpage} target="_blank">Learn more</ProjectPage>
                            </PrBtnCont>
                        </Buttons>
                    </ProjectDesc>
                </Wrapper>
            </Media>
        </MediaContextProvider>
    </>
}

export default ProjectCard;