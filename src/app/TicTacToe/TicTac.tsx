"use client";

import { Board, Player, Winner } from "@/types";
import React, { useState } from "react";

const TicTac: React.FC = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Winner>(null);

  const patterns: number[][] = [    // create a patterns her for winner solutionss
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkBoard = (newBoard: Board): Winner => { // checkBoard for the winner  
    for (const p of patterns) {
      const [a, b, c] = p; // take i array 1 time  in for loop
      if (
        newBoard[a] && // compare that conditions 
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a] as Player;
      }
    }
    if (!newBoard.includes(null)) { // if no section is null return this
      return "Draw";
    }
    return null;
  };
  const handleClick = (index: number): void => {  // handle Click for X  manually
    if (board[index] || winner) return;  // if winner declare and repeat cell does not repeat

    const newBoard = [...board]; // spread the array copy the board in new board
    newBoard[index] = player; //  

    const result = checkBoard(newBoard); 
    if (result) {
           setBoard(newBoard);
      setWinner(result);
    } else {
           setBoard(newBoard); // prseverse changes of X
           // for AI 
      setPlayer("O");
      setTimeout(() => aiMove(newBoard), 500);
    }
  };

  const aiMove = (currentBoard: Board): void => {
    if (winner) return;
    const emptyIndices: number[] = [];
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] == null) emptyIndices.push(i);
    }
    if (emptyIndices.length === 0) return;
    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)]; // random number regenerated
   const newBoard = [...currentBoard]; 
    newBoard[randomIndex] = "O";

    const result = checkBoard(newBoard);
    setBoard(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setPlayer("X");
    }
  };

  const restart = (): void => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setPlayer("X");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Tic Tac Toe</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {board.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "80px",
              height: "80px",
              fontSize: "24px",
              fontWeight: "bold",
              backgroundColor: "#f0f0f0",
              border: "2px solid #333",
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {winner ? (
          winner === "Draw" ? (
            <p>It is a draw!</p>
          ) : (
            <p>Winner: {winner}</p>
          )
        ) : (
          <p>Current Player: {player}</p>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={restart}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};
export default TicTac;

// without ai manually
// "use client";

// import { Board, Player, Winner } from "@/types";
// import React, { useState } from "react";

// const TicTac: React.FC = () => {
//   const [board, setBoard] = useState<Board>(Array(9).fill(null));
//   const [player, setPlayer] = useState<Player>("X");
//   const [winner, setWinner] = useState<Winner>(null);

//   const patterns: number[][] = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   const checkBoard = (newBoard: Board): Winner => {
//     for (const p of patterns) {
//       const [a, b, c] = p;
//       if (
//         newBoard[a] &&
//         newBoard[a] === newBoard[b] &&
//         newBoard[a] === newBoard[c]
//       ) {
//         return newBoard[a] as Player;
//       }
//     }
//     if (!newBoard.includes(null)) {
//       return "Draw";
//     }

//     return null;
//   };

//   const handleClick = (index: number): void => {
//     if (board[index] || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = player;

//     const result = checkBoard(newBoard);
//     setBoard(newBoard);

//     if (result) {
//       setWinner(result);
//     } else {
//       setPlayer(player === "X" ? "O" : "X");
//     }
//   };

//   const restart = (): void => {
//     setBoard(Array(9).fill(null));
//     setWinner(null);
//     setPlayer("X");
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Tic Tac Toe</h2>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 80px)",
//           gap: "10px",
//           justifyContent: "center",
//           marginBottom: "20px",
//         }}
//       >
//         {board.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             style={{
//               width: "80px",
//               height: "80px",
//               fontSize: "24px",
//               fontWeight: "bold",
//               backgroundColor: "#f0f0f0",
//               border: "2px solid #333",
//               cursor: "pointer",
//             }}
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//       <div>
//         {winner ? (
//           winner === "Draw" ? (
//             <p>It is a draw!</p>
//           ) : (
//             <p>Winner: {winner}</p>
//           )
//         ) : (
//           <p>Current Player: {player}</p>
//         )}
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={restart}
//           style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
//         >
//           Restart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TicTac;
