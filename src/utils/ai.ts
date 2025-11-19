import { Player } from '../stores/gameStore'

const BOARD_SIZE = 15

// 评分权重
const WEIGHTS = {
  FIVE: 100000,      // 五连
  FOUR: 10000,       // 四连
  THREE: 1000,       // 三连
  TWO: 100,          // 二连
  ONE: 10,           // 一连
  BLOCKED_FOUR: 5000, // 被堵的四连
  BLOCKED_THREE: 500, // 被堵的三连
  BLOCKED_TWO: 50,   // 被堵的二连
}

// 获取某个方向上的连续棋子数
function getLine(board: Player[][], row: number, col: number, dx: number, dy: number, player: Player): number {
  let count = 0
  let r = row + dx
  let c = col + dy
  
  while (r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE && board[r][c] === player) {
    count++
    r += dx
    c += dy
  }
  
  return count
}

// 获取某个位置的评分
function getPositionScore(board: Player[][], row: number, col: number, player: Player): number {
  if (board[row][col] !== null) return 0
  
  let score = 0
  const directions = [
    [0, 1], [1, 0], [1, 1], [1, -1]
  ]
  
  for (const [dx, dy] of directions) {
    const leftCount = getLine(board, row, col, -dx, -dy, player)
    const rightCount = getLine(board, row, col, dx, dy, player)
    const totalCount = leftCount + rightCount + 1
    
    // 检查是否被堵
    const leftBlocked = row - dx * (leftCount + 1) < 0 || 
                       row - dx * (leftCount + 1) >= BOARD_SIZE ||
                       col - dy * (leftCount + 1) < 0 || 
                       col - dy * (leftCount + 1) >= BOARD_SIZE ||
                       board[row - dx * (leftCount + 1)][col - dy * (leftCount + 1)] !== null
    
    const rightBlocked = row + dx * (rightCount + 1) < 0 || 
                        row + dx * (rightCount + 1) >= BOARD_SIZE ||
                        col + dy * (rightCount + 1) < 0 || 
                        col + dy * (rightCount + 1) >= BOARD_SIZE ||
                        board[row + dx * (rightCount + 1)][col + dy * (rightCount + 1)] !== null
    
    const blocked = leftBlocked && rightBlocked
    
    if (totalCount >= 5) {
      score += WEIGHTS.FIVE
    } else if (totalCount === 4) {
      score += blocked ? WEIGHTS.BLOCKED_FOUR : WEIGHTS.FOUR
    } else if (totalCount === 3) {
      score += blocked ? WEIGHTS.BLOCKED_THREE : WEIGHTS.THREE
    } else if (totalCount === 2) {
      score += blocked ? WEIGHTS.BLOCKED_TWO : WEIGHTS.TWO
    } else if (totalCount === 1) {
      score += WEIGHTS.ONE
    }
  }
  
  return score
}

// 获取最佳移动位置
export function getBestMove(board: Player[][], aiPlayer: Player, difficulty: 'easy' | 'medium' | 'hard' | 'expert'): { row: number; col: number } {
  let bestScore = -Infinity
  let bestMove = { row: 7, col: 7 } // 默认中心位置
  
  const opponent = aiPlayer === 'black' ? 'white' : 'black'
  
  // 简单难度：随机选择
  if (difficulty === 'easy') {
    const availableMoves: { row: number; col: number }[] = []
    
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (board[row][col] === null) {
          availableMoves.push({ row, col })
        }
      }
    }
    
    if (availableMoves.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMoves.length)
      return availableMoves[randomIndex]
    }
    return bestMove
  }
  
  // 中等及以上难度：使用评分算法
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === null) {
        // 检查是否能直接获胜
        const winScore = getPositionScore(board, row, col, aiPlayer)
        if (winScore >= WEIGHTS.FIVE) {
          return { row, col }
        }
        
        // 检查是否需要阻止对手获胜
        const blockScore = getPositionScore(board, row, col, opponent)
        if (blockScore >= WEIGHTS.FIVE) {
          return { row, col }
        }
        
        // 计算综合评分
        let totalScore = winScore + blockScore * 0.8
        
        // 困难难度：考虑更多因素
        if (difficulty === 'hard' || difficulty === 'expert') {
          // 添加位置偏好（中心位置更优）
          const centerDistance = Math.abs(row - 7) + Math.abs(col - 7)
          const positionBonus = Math.max(0, 10 - centerDistance)
          totalScore += positionBonus
          
          // 专家难度：更深层次的策略
          if (difficulty === 'expert') {
            // 考虑创造多个威胁
            const aiScore = getPositionScore(board, row, col, aiPlayer)
            const opponentScore = getPositionScore(board, row, col, opponent)
            
            if (aiScore >= WEIGHTS.FOUR) totalScore += 1000
            if (opponentScore >= WEIGHTS.FOUR) totalScore += 800
            if (aiScore >= WEIGHTS.THREE) totalScore += 100
            if (opponentScore >= WEIGHTS.THREE) totalScore += 80
          }
        }
        
        if (totalScore > bestScore) {
          bestScore = totalScore
          bestMove = { row, col }
        }
      }
    }
  }
  
  return bestMove
}