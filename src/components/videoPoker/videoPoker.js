import { useState } from "react";
import SectionTable from "./tableSection";

import PayTableContainer from "./styledContainer";

function VideoPoker () {
    const tableInfo ={
        royalflush:300,
        strflush:80,
        fourofkind:40,
        fullhouse:12,
        flush:9,
        straight:7,
        threeofkind:5,
        twopair:1,
    }
    const[poker,setPoker]=useState({
        bet:3,
        score:100,
    });
    const {bet , score} = poker;
    return (
        <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}} >
        <PayTableContainer>
            <SectionTable winText='Royal Flush' winScore={tableInfo.royalflush * bet}/>
            <SectionTable winText='Straight Flush' winScore={tableInfo.straight * bet}/>
            <SectionTable winText='4 Of Kind' winScore={tableInfo.fourofkind * bet}/>
            <SectionTable winText='Full House' winScore={tableInfo.fullhouse * bet}/>
            <SectionTable winText='Flush' winScore={tableInfo.flush * bet}/>
            <SectionTable winText='Straight' winScore={tableInfo.straight * bet}/>
            <SectionTable winText='3 of Kind' winScore={tableInfo.threeofkind * bet}/>
            <SectionTable winText='2 Pair' winScore={tableInfo.twopair * bet}/>
        </PayTableContainer>
        <p>Hello World</p>
        </div>
    );
};

export default VideoPoker;