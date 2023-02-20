import { useState } from "react";

function Square({value,onSquareClick}) {
 
  return (
    
    <button onClick ={onSquareClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">{value}</button>
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
        <Square value = {value[0]} onSquareClick={()=> handleClick(0)}></Square>
        <Square value = {value[1]} onSquareClick={()=> handleClick(1)}></Square>
        <Square value = {value[2]} onSquareClick={()=> handleClick(2)}></Square>
      </div>

      <div className="flex">
        <Square value = {value[3]} onSquareClick={()=> handleClick(3)}></Square>
        <Square value = {value[4]} onSquareClick={()=> handleClick(4)}></Square>
        <Square value = {value[5]} onSquareClick={()=> handleClick(5)}></Square>
      </div>

      <div className="flex">
        <Square value = {value[6]} onSquareClick={()=> handleClick(6)}></Square>
        <Square value = {value[7]} onSquareClick={()=> handleClick(7)}></Square>
        <Square value = {value[8]} onSquareClick={()=> handleClick(8)}></Square>
      </div>
    </>
  );
}

function DisplayWinner(squares){
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

    if(Squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      return squares[a];
    }
   }

   return null;
}