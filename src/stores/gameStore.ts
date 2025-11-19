import { create } from 'zustand'

export type Player = 'black' | 'white' | null
export type GameMode = 'easy' | 'medium' | 'hard' | 'expert'
export type GameStatus = 'playing' | 'finished' | 'paused'

export interface GameState {
  board: Player[][]
  currentPlayer: Player
  gameStatus: GameStatus
  winner: Player
  lastMove: { row: number; col: number } | null
  gameMode: GameMode
  playerColor: 'black' | 'white'
  winRate: number
  totalGames: number
  wins: number
  isAiThinking: boolean
}

interface GameActions {
  initializeBoard: () => void
  makeMove: (row: number, col: number) => boolean
  checkWinner: (board: Player[][], row: number, col: number) => Player
  switchPlayer: () => void
  setGameMode: (mode: GameMode) => void
  setPlayerColor: (color: 'black' | 'white') => void
  resetGame: () => void
  setAiThinking: (thinking: boolean) => void
  updateWinRate: (won: boolean) => void
}

const BOARD_SIZE = 15

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  board: [],
  currentPlayer: 'black',
  gameStatus: 'playing',
  winner: null,
  lastMove: null,
  gameMode: 'easy',
  playerColor: 'black',
  winRate: 0,
  totalGames: 0,
  wins: 0,
  isAiThinking: false,

  initializeBoard: () => {
    const board: Player[][] = Array(BOARD_SIZE).fill(null).map(() => 
      Array(BOARD_SIZE).fill(null)
    )
    set({ board, currentPlayer: 'black', gameStatus: 'playing', winner: null, lastMove: null })
  },

  makeMove: (row: number, col: number) => {
    const { board, currentPlayer, gameStatus, playerColor } = get()
    
    if (gameStatus !== 'playing' || board[row][col] !== null) {
      return false
    }

    const newBoard = board.map(r => [...r])
    newBoard[row][col] = currentPlayer

    const winner = get().checkWinner(newBoard, row, col)
    const newStatus = winner ? 'finished' : 'playing'
    
    set({ 
      board: newBoard, 
      lastMove: { row, col },
      winner,
      gameStatus: newStatus
    })

    if (!winner) {
      get().switchPlayer()
    } else if (currentPlayer === playerColor) {
      get().updateWinRate(true)
    }

    return true
  },

  checkWinner: (board: Player[][], row: number, col: number): Player => {
    const player = board[row][col]
    if (!player) return null

    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1]
    ]

    for (const [dx, dy] of directions) {
      let count = 1
      
      // 检查正方向
      for (let i = 1; i < 5; i++) {
        const newRow = row + dx * i
        const newCol = col + dy * i
        if (newRow >= 0 && newRow < BOARD_SIZE && newCol >= 0 && newCol < BOARD_SIZE && 
            board[newRow][newCol] === player) {
          count++
        } else {
          break
        }
      }
      
      // 检查反方向
      for (let i = 1; i < 5; i++) {
        const newRow = row - dx * i
        const newCol = col - dy * i
        if (newRow >= 0 && newRow < BOARD_SIZE && newCol >= 0 && newCol < BOARD_SIZE && 
            board[newRow][newCol] === player) {
          count++
        } else {
          break
        }
      }
      
      if (count >= 5) {
        return player
      }
    }
    
    return null
  },

  switchPlayer: () => {
    const { currentPlayer } = get()
    set({ currentPlayer: currentPlayer === 'black' ? 'white' : 'black' })
  },

  setGameMode: (mode: GameMode) => {
    set({ gameMode: mode })
  },

  setPlayerColor: (color: 'black' | 'white') => {
    set({ playerColor: color })
  },

  resetGame: () => {
    get().initializeBoard()
  },

  setAiThinking: (thinking: boolean) => {
    set({ isAiThinking: thinking })
  },

  updateWinRate: (won: boolean) => {
    const { totalGames, wins } = get()
    const newTotalGames = totalGames + 1
    const newWins = won ? wins + 1 : wins
    const newWinRate = newTotalGames > 0 ? Math.round((newWins / newTotalGames) * 100) : 0
    
    set({ 
      totalGames: newTotalGames, 
      wins: newWins, 
      winRate: newWinRate 
    })
  }
}))