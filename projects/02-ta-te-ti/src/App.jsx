import { useState } from "react"

const TURNS = { // Turnos
  X: 'x', 
  O: 'o'
}


const Square = ({children,isSelected,updateBoard,index}) =>{
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () =>{
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [board,setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn,setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const [winner,setWinner] = useState(null)

  const checkWinner = (boardToCheck) =>{
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] && // 0
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a] // x u o
      }
    }
    // si no hay ganador
    return null
  }
  
  const updateBoard = (index) => {
    // no actualizamos esta posicion
    // si ya tiene algo
    if(board[index]|| winner) return
    // actualizar el tablero
    const newBoard = [...board] // se hace asi porque no se muta nunca los array y los props
    // spread y rest operator
    newBoard[index] = turn // x u o
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
    }
  }

  return (
    <main className='board'>
      <h1>Ta te ti</h1>
      <section className="game">
        {
          board.map((_,index)=>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}
export default App
