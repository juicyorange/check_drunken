import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.section`
  height : 100%;
  display: flex;
  justify-content: center;
`;

const SetInfo = styled.form`
  font-size: 15px;
  margin: 5%;
`;

const SelectAlcohol = styled.select`
  margin-left :10px;
`;

const InputBlock = styled.input`
  margin-left :10px;
`;


function InfoForm() {
    const [info, setInfo]= useState({name:'Soju', weight:'', selfrec:''});

    const {name, weight, selfrec} = info;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInfo({
            ...info,
            [name] : value
        });
    };

    return (
        <>
        <Container>
            <SetInfo>
                <p>종류 : 
                    <SelectAlcohol name="name" onChange={onChange} required>
                        <option value = "Soju">소주</option>
                        <option value = "Macju">맥주</option>
                        <option value = "Somac">소맥</option>
                    </SelectAlcohol>
                </p>
                <p>무게 :
                    <InputBlock  
                        placeholder="몸무게(kg)"
                        name = "weight"
                        value={weight}
                        onChange={onChange}
                    />
                </p>
                <p>주량 :
                    <InputBlock  
                        placeholder="주량(잔)"
                        name = "selfrec"
                        value={selfrec}
                        onChange={onChange}
                    />
                </p>
                <Link to={{
                    pathname: `/home`,
                    state:{
                        name,
                        weight,
                        selfrec
                    }
                }} style={{ float: "right"}}>측정시작</Link>
            </SetInfo>
        </Container> 
        </>
    )
}


export default InfoForm;