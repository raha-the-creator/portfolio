import styled from "styled-components";

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #42A7E8;
    width: fit-content;
    width: 200px;
    height: 50px;
    border-radius: 10px;
`

const Text = styled.p`
    font-size: 20px;
    font-family: 'Heebo';
    font-weight: 500;
    padding: 10px;
    color: white;
`

const ResumeButton = ({}) =>{

    return (
    <ButtonWrapper>
        <a href="https://drive.google.com/file/d/1kvEP_TrncuVKRNi3j1gPIGl3La3xy1Df/view?usp=sharing">
            <Text>See My Resume</Text>
        </a>
    </ButtonWrapper>
    )
}

export default ResumeButton;