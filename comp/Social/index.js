import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1px;
`

const SocialLink = (props) => {
    return <>
        <Wrapper>
            <a href={props.link} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <img src={props.img} />
                <p>{props.title}</p>
            </a>
        </Wrapper>
    </>
}

export default SocialLink;