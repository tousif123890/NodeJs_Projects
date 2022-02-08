import React,{useEffect,useState} from 'react';
import './App.css';

function App() {

  const [userChioce,setUserChoice] = useState("rock");
  const [computerChoice,setComputerChoice] = useState("rock");
  const [userPoints,setUserPoints] = useState(0);
  const [computerPoints,setComputerPoints] = useState(0);
  const [turnResult,setTurnResult] = useState(null);
  const [result,setResult] = useState("Let's see who wins");
  const [gameOver,setGameOver] = useState(false);

  const choices = ["rock","paper","scissors"];

  const handleClick = (value)=>{
    setUserChoice(value);
    generateComputerChoice();
  }

  const generateComputerChoice = ()=>{
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  const reset = ()=>{
    window.location.reload();
  }

  useEffect(()=>{
    const comboMoves = userChioce + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4){
      if(comboMoves === "rockscissors" || comboMoves === "paperrock" || comboMoves === "scissorspaper"){
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User gets the point!");
        if(updatedUserPoints === 5){
          setResult("User Wins!");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }
      if(comboMoves === "paperscissors" || comboMoves === "scissorsrock" || comboMoves === "rockpaper"){
        const updatedUserPoints = userPoints + 1;
        setComputerPoints(updatedUserPoints);
        setTurnResult("Computer Wins!");
        if(updatedUserPoints === 5){
          setResult("Computer Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }
      if(comboMoves === "rockrock" || comboMoves === "paperpaper" || comboMoves === "scissorsscissors"){
        setTurnResult("No one gets a point!");
      }
    }
  },[userChioce,computerChoice])

  return (
    <div className="App">

        <h1 className="heading">Rock-Paper-Scissors</h1>
 

      <div className="score">
        <h3>User Points:{userPoints}</h3>
        <h3>Computer Points:{computerPoints}</h3>
      </div>

      <div className="choices">
        <div className="choice-user">
          <img className="user-hand" src={`../images/${userChioce}.png`} alt="Image of User choice"></img>
        </div>
        <div className="choice-computer">
          <img className="computer-hand" src={`../images/${computerChoice}.png`} alt="Image of Computer choice"></img>
        </div>
      </div>

      <div className="button-div">
        {choices.map((choice,index)=>
          <button className="button" key={index} onClick={()=>handleClick(choice)} disabled={gameOver}>{choice}</button>
        )}
      </div>

      <div className="result">
        <h3>Turn Result:{turnResult}</h3>
        <h3>Final Result:{result}</h3>
      </div>

      <div className="button-div">
        {gameOver && 
          <button className="button" onClick={()=>reset()}>Reset Game?</button>
        }
      </div>

    </div>
  );
}

export default App;
