import { useState } from "react";
import SectionTable from "./tableSection";

import PayTableContainer from "./styledTableContainer";
import HistoryGameContainer from "./styledHistoryGameContainer";
import GameCounter from "./gameCounter";
import PokerText from "./styledParagraph";

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
        bet:1,
        score:100,
        winCounter:0,
        loseCounter:0,
        gameText:"Select Your Bet And Click The Start Game Button !",
    });
    const {bet , score , winCounter , loseCounter,gameText} = poker;

    function incrementBet (event) {
        const value = bet+1;
        if(bet < score){
        setPoker((prevState)=>({
            ...prevState,
            [event.target.name]:value,
        }))}
    }
    function decrementBet (event) {
        const value = bet-1;
        if(bet > 1){
        setPoker((prevState)=>({
            ...prevState,
            [event.target.name]:value,
        }))}
    }
    return (
<>
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
        <HistoryGameContainer>
            <GameCounter win={winCounter} lose={loseCounter}/>
            <section>
                <p> To add this section soon...</p> 
            </section>
        </HistoryGameContainer>
        </div>
        <div className="action-container">
            <div className="btn-container">
                <section>
                    <button name="bet" onClick={decrementBet}>Bet -1</button>
                    <p>{bet}</p>
                    <button name="bet" onClick={incrementBet}>Bet +1</button>
                </section>
                <button>Start New Game</button>
                <p>{score}</p>
            </div>
        </div>
        <PokerText>{gameText}</PokerText>
</>
    );
};

export default VideoPoker;