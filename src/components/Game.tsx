import { useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import GameBoard from './GameBoard'
import GameControls from './GameControls'
import GameStatus from './GameStatus'

export default function Game() {
  const { initializeBoard, gameStatus, winner, currentPlayer, playerColor, isAiThinking, makeMove, setAiThinking } = useGameStore()

  useEffect(() => {
    initializeBoard()
  }, [])

  // AI自动下棋
  useEffect(() => {
    if (gameStatus === 'playing' && currentPlayer !== playerColor && !isAiThinking) {
      const timer = setTimeout(() => {
        setAiThinking(true)
        
        // 模拟AI思考时间
        setTimeout(async () => {
          const { getBestMove } = await import('../utils/ai')
          const { board, gameMode } = useGameStore.getState()
          const aiPlayer = playerColor === 'black' ? 'white' : 'black'
          
          const bestMove = getBestMove(board, aiPlayer, gameMode)
          makeMove(bestMove.row, bestMove.col)
          setAiThinking(false)
        }, 500 + Math.random() * 1000) // 0.5-1.5秒思考时间
      }, 300)
      
      return () => clearTimeout(timer)
    }
  }, [currentPlayer, playerColor, gameStatus, isAiThinking, makeMove, setAiThinking])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* 标题区域 */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              网络版五子棋
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg mt-4">让我们来试试网络版五子棋吧！</p>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 左侧控制面板 */}
          <div className="lg:col-span-3 space-y-6">
            <GameControls />
          </div>

          {/* 中间棋盘区域 */}
          <div className="lg:col-span-6">
            <GameBoard />
          </div>

          {/* 右侧状态面板 */}
          <div className="lg:col-span-3 space-y-6">
            <GameStatus />
          </div>
        </div>

        {/* 游戏结束弹窗 */}
        {winner && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/20 max-w-md mx-4">
              <div className="mb-6">
                {winner === playerColor ? (
                  <div className="text-6xl mb-4">🎉</div>
                ) : (
                  <div className="text-6xl mb-4">😅</div>
                )}
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {winner === playerColor ? '恭喜你赢了！' : '哈哈，你输了！'}
                </h2>
                <p className="text-gray-600">
                  {winner === playerColor ? '你的五子棋技术真棒！' : '再接再厉，下次一定能赢！'}
                </p>
              </div>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => initializeBoard()}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  再来一局
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}