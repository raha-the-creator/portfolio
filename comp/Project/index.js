import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
`

const ProjectImg = styled.div`
    display: flex;
    align-items: center;
`

const Picture = styled.img`
    border-radius: 50%;
    content:url(${props=>props.img});
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
    padding: 15px;
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
`

const ProjectLink = styled.a`
    background-color: #142850;
    color: white;
    padding: 10px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 15px;
`

const ProjectCard = (props) => {
    return <>
        <Wrapper>
            <ProjectImg>
                <img src={props.img} />
            </ProjectImg>
            <ProjectDesc>
                <PrTitle>{props.title}</PrTitle>
                <ProjectTags>
                    <Time>{props.year}</Time>
                    <Type>{props.type}</Type>
                </ProjectTags>
                <ProjectText>{props.desc}</ProjectText>
                <ProjectLink href={props.prlink}>See project</ProjectLink>
            </ProjectDesc>
        </Wrapper>
    </>
}

export default ProjectCard;