import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
`

const TechnologyCard = (props) => {
    return <>
        <Wrapper>
            <img src={props.img} />
            <p>{props.title}</p>
        </Wrapper>
    </>
}

export default TechnologyCard;