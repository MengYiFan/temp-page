import { useGameStore } from '../stores/gameStore'

export default function GameBoard() {
  const { board, makeMove, currentPlayer, gameStatus, lastMove, playerColor, isAiThinking } = useGameStore()

  const handleCellClick = (row: number, col: number) => {
    if (gameStatus !== 'playing' || isAiThinking) return
    if (currentPlayer !== playerColor) return
    
    makeMove(row, col)
  }

  const renderStone = (player: 'black' | 'white' | null, row: number, col: number) => {
    if (!player) return null
    
    const isLastMove = lastMove && lastMove.row === row && lastMove.col === col
    
    return (
      <div className={`w-7 h-7 rounded-full border-2 shadow-xl transition-all duration-200 ${
        player === 'black' 
          ? 'bg-gradient-to-br from-gray-800 to-black border-gray-900 shadow-gray-900/50' 
          : 'bg-gradient-to-br from-white to-gray-100 border-gray-300 shadow-gray-300/50'
      } ${isLastMove ? 'ring-3 ring-red-500 ring-opacity-75 scale-110' : 'hover:scale-105'}`}>
        {isLastMove && (
          <div className="w-full h-full flex items-center justify-center animate-pulse">
            <span className="text-red-500 text-sm font-bold drop-shadow-lg">★</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl shadow-2xl p-4 sm:p-6 border border-amber-200">
      <div className="relative">
        {/* 棋盘网格 */}
        <div className="grid grid-cols-15 gap-0 bg-gradient-to-br from-amber-100 to-yellow-50 p-3 sm:p-6 rounded-xl border-2 border-amber-300 shadow-inner overflow-auto">
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-6 h-6 sm:w-8 sm:h-8 border border-amber-400 flex items-center justify-center cursor-pointer transition-all duration-200 relative group hover:bg-amber-200/50"
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {/* 网格线 */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* 横线 */}
                  {rowIndex < 14 && (
                    <div className="absolute bottom-0 left-0 w-full h-px bg-amber-600"></div>
                  )}
                  {/* 竖线 */}
                  {colIndex < 14 && (
                    <div className="absolute right-0 top-0 w-px h-full bg-amber-600"></div>
                  )}
                </div>
                
                {/* 悬停效果 */}
                {!cell && currentPlayer === playerColor && gameStatus === 'playing' && !isAiThinking && (
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-full ${
                    currentPlayer === 'black' ? 'bg-gray-800' : 'bg-white'
                  }`}></div>
                )}
                
                {/* 棋子 */}
                {renderStone(cell, rowIndex, colIndex)}
                
                {/* 星位标记 */}
                {(rowIndex === 3 || rowIndex === 7 || rowIndex === 11) &&
                 (colIndex === 3 || colIndex === 7 || colIndex === 11) &&
                 !cell && (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-800 rounded-full opacity-60"></div>
                )}
              </div>
            ))
          )}
        </div>
        
        {/* AI思考指示器 */}
        {isAiThinking && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center rounded-xl">
            <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-white/20">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              <span className="text-gray-800 font-medium">AI思考中...</span>
            </div>
          </div>
        )}
      </div>
      
      {/* 当前玩家指示器 */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-gray-700 font-medium">当前玩家：</span>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 ${
              currentPlayer === 'black' 
                ? 'bg-gradient-to-br from-gray-800 to-black border-gray-900 shadow-lg' 
                : 'bg-gradient-to-br from-white to-gray-100 border-gray-300 shadow-lg'
            } ${currentPlayer === playerColor ? 'animate-pulse ring-2 ring-blue-400' : ''}`}></div>
            <span className={`font-bold ${
              currentPlayer === playerColor ? 'text-blue-600' : 'text-gray-600'
            }`}>
              {currentPlayer === 'black' ? '黑子' : '白子'}
            </span>
          </div>
        </div>
        
        {currentPlayer !== playerColor && !isAiThinking && (
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            等待对手...
          </div>
        )}
      </div>
    </div>
  )
}