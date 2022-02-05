import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
`

const Picture = styled.img`
    border-radius: 50%;
    content:url('./me.jpg');
    width: 350px;
    height: 350px;
    z-index: 1;
`

const Circle = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    background-color: #EDF7FA;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    z-index: -1;
`

const ProfilePicture = () =>{
    return <Wrapper>
        <Picture />
        <Circle />
    </Wrapper>
}

export default ProfilePicture;