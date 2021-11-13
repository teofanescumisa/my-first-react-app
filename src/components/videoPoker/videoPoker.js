import { useState } from "react";
import SectionTable from "./tableSection";

import PayTableContainer from "./styledTableContainer";
import HistoryGameContainer from "./styledHistoryGameContainer";
import GameCounter from "./gameCounter";
import StyledGameProgressContainer from "./gameProgressContainer";
import PokerText from "./styledParagraph";
import fullDeck from "./fullDeckVariable";
import CardGame from "./cardGame";
import StyledCardGameContainer from "./cardGameContainer";

const gameDeck =[...fullDeck];

const noCard = './img/Deck.jpg';
const tableInfo ={
    royalflush:300,
    strflush:80,
    fourofkind:40,
    fullhouse:12,
    flush:9,
    straight:7,
    threeofkind:5,
    twopair:3,
}

function VideoPoker () {
    const [card1,setCard1] = useState({name:"",link:"",value:"",type:"",keep:true});
    const [card2,setCard2] = useState({name:"",link:"",value:"",type:"",keep:false});
    const [card3,setCard3] = useState({name:"",link:"",value:"",type:"",keep:true});
    const [card4,setCard4] = useState({name:"",link:"",value:"",type:"",keep:false});
    const [card5,setCard5] = useState({name:"",link:"",value:"",type:"",keep:true});
    
    const[poker,setPoker]=useState({
        bet:1,
        score:100,
        winCounter:0,
        loseCounter:0,
        gameText:"Select Your Bet And Click The Start Game Button !",
    });
    const {bet , score , winCounter , loseCounter,gameText} = poker;

        function onBetChange (event) {
            const btnType = event.target.name;
            setPoker((prevState)=>({
                ...prevState,
                bet: btnType === "increment" && bet <score ? bet +1 :
                btnType === "decrement" && bet > 1 ? bet -1 : bet,
            })) 
        }
        function testFirst (event){
            const card =event.target.name;
            if(card === 'card1') {card1.keep === true ? setCard1((prevState)=> ({...prevState,keep:false,})) : setCard1((prevState)=> ({...prevState,keep:true,}))}
            if(card === 'card2') {card2.keep === true ? setCard2((prevState)=> ({...prevState,keep:false,})) : setCard2((prevState)=> ({...prevState,keep:true,}))}
            if(card === 'card3') {card3.keep === true ? setCard3((prevState)=> ({...prevState,keep:false,})) : setCard3((prevState)=> ({...prevState,keep:true,}))}
            if(card === 'card4') {card4.keep === true ? setCard4((prevState)=> ({...prevState,keep:false,})) : setCard4((prevState)=> ({...prevState,keep:true,}))}
            if(card === 'card5') {card5.keep === true ? setCard5((prevState)=> ({...prevState,keep:false,})) : setCard5((prevState)=> ({...prevState,keep:true,}))}
        }
    return (
<>
        <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}} >
        <PayTableContainer>
            <SectionTable winText='Royal Flush' winScore={tableInfo.royalflush * bet}/>
            <SectionTable winText='Straight Flush' winScore={tableInfo.strflush * bet}/>
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
        <StyledGameProgressContainer>
                <section>
                    <button name="decrement" onClick={onBetChange}>Bet -1</button>
                    <p>{bet}</p>
                    <button name="increment" onClick={onBetChange}>Bet +1</button>
                </section>
            <button>Start New Game</button>
            <p>Points : {score}</p>
        </StyledGameProgressContainer>
        <PokerText>{gameText}</PokerText>

        <StyledCardGameContainer>
            <CardGame 
                name='card1'
                link={ card1.link.length === 0 ? noCard : card1.link}
                altName={card1.name.length === 0 ? 'Back Of a Card Deck' : card1.name}
                hold={card1.keep}
                holdEvent={testFirst}
            />
             <CardGame 
                name='card2'
                link={ card2.link.length === 0 ? noCard : card2.link}
                altName={card2.name.length === 0 ? 'Back Of a Card Deck' : card2.name}
                hold={card2.keep}
                holdEvent={testFirst}
            />
             <CardGame 
                name='card3'
                link={ card3.link.length === 0 ? noCard : card3.link}
                altName={card3.name.length === 0 ? 'Back Of a Card Deck' : card3.name}
                hold={card3.keep}
                holdEvent={testFirst}
            />
             <CardGame 
                name='card4'
                link={ card4.link.length === 0 ? noCard : card4.link}
                altName={card4.name.length === 0 ? 'Back Of a Card Deck' : card4.name}
                hold={card4.keep}
                holdEvent={testFirst}
            />
             <CardGame 
                name='card5'
                link={ card5.link.length === 0 ? noCard : card5.link}
                altName={card5.name.length === 0 ? 'Back Of a Card Deck' : card5.name}
                hold={card5.keep}
                holdEvent={testFirst}
            />
        </StyledCardGameContainer>
        
</>
    );
};

export default VideoPoker;