import { useState } from "react";

function SquareBoard({value,onSquareBoardClick}) {
 
  return (
    
    <button onClick ={onSquareBoardClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">{value}</button>
  );
}

export default function Board() {
  const [value,setValue] = useState(Array(9).fill(null));
  const [turn,setTurn] = useState(true);
  
  const winner = DisplayWinner(value);
   let status;
   if(winner){
        status = `winner:${winner}`;
    
   }
   else{
    status = `nextPlayer:${turn?'X':'O'}`
   }

  function handleClick(index){
     const nextValue = value.slice();

     if(value[index] || winner){
      return;
     }

     if(turn){
     nextValue[index] = 'X'
     }
     else{
      nextValue[index] = 'O'
     }

     setValue([...nextValue]);
     setTurn(!turn)
     
  }
  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <SquareBoard value = {value[0]} onSquareBoardClick={()=> handleClick(0)}></SquareBoard>
        <SquareBoard value = {value[1]} onSquareBoardClick={()=> handleClick(1)}></SquareBoard>
        <SquareBoard value = {value[2]} onSquareBoardClick={()=> handleClick(2)}></SquareBoard>
      </div>

      <div className="flex">
        <SquareBoard value = {value[3]} onSquareBoardClick={()=> handleClick(3)}></SquareBoard>
        <SquareBoard value = {value[4]} onSquareBoardClick={()=> handleClick(4)}></SquareBoard>
        <SquareBoard value = {value[5]} onSquareBoardClick={()=> handleClick(5)}></SquareBoard>
      </div>

      <div className="flex">
        <SquareBoard value = {value[6]} onSquareBoardClick={()=> handleClick(6)}></SquareBoard>
        <SquareBoard value = {value[7]} onSquareBoardClick={()=> handleClick(7)}></SquareBoard>
        <SquareBoard value = {value[8]} onSquareBoardClick={()=> handleClick(8)}></SquareBoard>
      </div>
    </>
  );
}

function DisplayWinner(SquareBoards){
   let winningLogic = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [2,5,8],
    [1,4,7]

   ]

   for(let i = 0; i<winningLogic.length;i++){
    let [a,b,c] = winningLogic[i]

    if(SquareBoards[a] && SquareBoards[a]===SquareBoards[b] && SquareBoards[a]===SquareBoards[c]){
      return SquareBoards[a];
    }
   }

   return null;
}