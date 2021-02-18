import React, { useEffect } from "react";
import AlcoholCounter from '../components/AlcoholCounter';

function Home({ location, history }) {

    useEffect(() => {
        if(location.state === undefined){
            history.push("/");
        }
    })

    return (
        <>
            <AlcoholCounter 
                selfrec = {location.state.selfrec}
                weight = {location.state.weight}
                name = {location.state.name}
            />
        </>
    )
}

export default Home;