import React, {useState} from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
    margin : auto;
    width : 50%;
    heigh: 100%;
    background: ${props => props.color || 'green'};
`;

const NowInfo = styled.p`
    margin : auto;
    margin-top: 10px;
    width : 80%;
    text-align: center;
`;

const ButtonContainer = styled.div`
    margin-top : 20px;
    display: flex;
    justify-content: center;
`;

function AlcoholCounter({ selfrec, weight, name }) {
    const [drinked, setDrinked] = useState(0);

    // 무게랑 이름을 변수로 넘긴다.
    // 결과로 무게와 이름에 따른 적당주량을 받는다.
    let rec = CalJan(weight, name);
   
    const handleIncrease = () =>{
        setDrinked(drinked+1);
    }

    const handleDecrease = () =>{
        if(drinked !== 0)
            setDrinked(drinked-1);
    }

    return (
        <CounterContainer color={
            // 이렇게 복잡하게 적는게 맞는지 모르겠다.
            // 이것보다 복잡하면 밖에 함수로 빼는것이 더 좋을것 같다. 
            (() => {
                if (drinked > selfrec)
                    return "red";
                else if (drinked > rec)
                    return "pink";
                return 'green';
            })
        }>
            <NowInfo>{drinked} / {selfrec} (권장 {rec.toFixed(2)})</NowInfo>
            <ButtonContainer>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </ButtonContainer>
        </CounterContainer>
    )
}

// 권장 알코올양 계산
const CalRecommend = weight => {
    return (weight*0.1*24)/2
}

// 권장 잔수 계산
const CalJan = (weight, name) => {
    if(name === "Soju") {
        // 소주잔 기준
        return ((CalRecommend(weight)*100)/17)/48;
    }
    else if(name === "Macju") {
        // 일반 식당에서 병맥시켰을때 나오는 컵 기준
        return ((CalRecommend(weight)*100)/4.5)/190;
    }
    else if (name === "Somac"){
        // 소맥 비율 2:8 , 소맥을 말때는 꽉채우지 않으니 100ml로 하자
        return ((CalRecommend(weight)*100)/7.1)/100;
    }
}

export default AlcoholCounter;