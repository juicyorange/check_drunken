import React, {useState} from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
    margin : auto;
    margin-top : 40px;
    margin-bottom : 50px;

    padding: 20px;
    border-radius: 5px;

    width : 50%;
    height: 100%;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);


    background-image: ${props => props.color};
`;

const NowInfo = styled.p`
    font-size : 15px;
    margin : auto;
    margin-top: 10px;
    width : 80%;
    text-align: center;
    list-style:none;
`;

const ButtonContainer = styled.div`
    margin-top : 20px;
    display: flex;
    justify-content: center;
    button {
        margin:2px;
    }
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
        <>
        <CounterContainer color={
            // 이렇게 복잡하게 적는게 맞는지 모르겠다.
            // 이것보다 복잡하면 밖에 함수로 빼는것이 더 좋을것 같다. 
            (() => {
                if (drinked > selfrec)
                    return "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)";
                else if (drinked > rec)
                    return "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)";
                return "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)";
            })
        }>
            <NowInfo>당신이 마시는 술은 <br/>"{AlcoholName(name)}" 입니다.</NowInfo>
            <NowInfo>{drinked} / {selfrec} </NowInfo>
            <NowInfo>(권장 {rec.toFixed(2)} 잔)</NowInfo>
            <ButtonContainer>
                <button onClick={handleIncrease}> + </button>
                <button onClick={handleDecrease}> - </button>
            </ButtonContainer>
        </CounterContainer>
        <NowInfo>
            <span style={{color:"green"}}>초록빛은 안정 </span> / 
            <span style={{color:"blue"}}> 푸른빛은 주의</span> /
            <span style={{color:"red"}}> 붉은빛은 위험</span>
        </NowInfo>
        </>
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


const AlcoholName = (name) => {
    if(name === "Soju")
        return "쏘주";
    else if(name === "Macju")   
        return "맥주";
    return "쏘맥"
}

export default AlcoholCounter;