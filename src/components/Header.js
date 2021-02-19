import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    margin: auto;
    width: 100%;
    img {    
        width: 100%;
    }
`;

// 화살표 함수 이용
const Header = () => {
    return (
        <HeaderContainer>
            <img src = "img/drunken.jpg"></img>
        </HeaderContainer>
    )
}

export default Header;