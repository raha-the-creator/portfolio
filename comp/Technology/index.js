import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px;
    padding: 0px;
    width: 150px;
    height: 150px;
`

const Par = styled.p`
    text-align: center;
    font-size: 14px;
`

const TechnologyCard = (props) => {
    return <>
        <Wrapper>
            <img src={props.img} />
            <Par>{props.title}</Par>
        </Wrapper>
    </>
}

export default TechnologyCard;