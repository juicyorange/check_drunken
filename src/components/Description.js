import React from 'react';
import styled from 'styled-components';


const DescContainer = styled.div`
    margin: auto;
    margin-top : 20px;
    width: 70%;
    font-size : 11.5px;
`;


const Description = () => {
    return (
        <DescContainer>
            소주 도수 : 17도 / 한 잔 용량 : 48ml<br/>
            맥주 도수 : 4.5도 / 한 잔 용량 : 190ml(기본 유리잔)<br/>
            쏘맥 도수 : 7.1도 / 한 잔 용량 : 100ml(기본 유리잔 절반)<br/>
        </DescContainer>
    )
};

export default Description;