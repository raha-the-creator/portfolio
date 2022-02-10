import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
`

const Picture = styled.img`
    border-radius: 50%;
    content:url('./me.png');
    width: 250px;
    height: 250px;
    z-index: 1;
`

const Circle = styled.div`
    position: absolute;
    left: 10px;
    top: 13px;
    background-color: #EDF7FA;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    z-index: -1;
`

const ProfilePicture = () =>{
    return <Wrapper>
        <Picture />
        <Circle />
    </Wrapper>
}

export default ProfilePicture;