import { useGameStore } from '../stores/gameStore'

export default function GameControls() {
  const { 
    gameMode, 
    setGameMode, 
    playerColor, 
    setPlayerColor, 
    resetGame,
    initializeBoard 
  } = useGameStore()

  const gameModes = [
    { 
      value: 'easy', 
      label: '简单', 
      color: 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700',
      selectedColor: 'ring-2 ring-green-300'
    },
    { 
      value: 'medium', 
      label: '中等', 
      color: 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700',
      selectedColor: 'ring-2 ring-yellow-300'
    },
    { 
      value: 'hard', 
      label: '困难', 
      color: 'bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700',
      selectedColor: 'ring-2 ring-orange-300'
    },
    { 
      value: 'expert', 
      label: '专家', 
      color: 'bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700',
      selectedColor: 'ring-2 ring-red-300'
    }
  ]

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-6 border border-white/20">
      {/* 游戏模式选择 */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          闯关类型
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {gameModes.map((mode) => (
            <button
              key={mode.value}
              onClick={() => setGameMode(mode.value as any)}
              className={`px-4 py-3 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                gameMode === mode.value 
                  ? mode.selectedColor + ' ' + mode.color.replace('hover:', '')
                  : mode.color
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* 棋子颜色选择 */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-gray-800 to-white rounded-full"></span>
          选择棋子
        </h3>
        <div className="flex gap-3">
          <button
            onClick={() => setPlayerColor('black')}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
              playerColor === 'black'
                ? 'bg-gradient-to-r from-gray-800 to-black text-white ring-2 ring-gray-300'
                : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300'
            }`}
          >
            ⚫ 黑子
          </button>
          <button
            onClick={() => setPlayerColor('white')}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 ${
              playerColor === 'white'
                ? 'bg-gradient-to-r from-white to-gray-100 text-gray-800 border-gray-400 ring-2 ring-gray-300'
                : 'bg-gradient-to-r from-white to-gray-50 text-gray-800 border-gray-200 hover:border-gray-300'
            }`}
          >
            ⚪ 白子
          </button>
        </div>
      </div>

      {/* 先后手选择 */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
          先手选择
        </h3>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setPlayerColor('black')
              initializeBoard()
            }}
            className={`flex-1 px-4 py-3 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
              playerColor === 'black'
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 ring-2 ring-blue-300'
                : 'bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700'
            }`}
          >
            🎯 先手
          </button>
          <button
            onClick={() => {
              setPlayerColor('white')
              initializeBoard()
            }}
            className={`flex-1 px-4 py-3 rounded-xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
              playerColor === 'white'
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 ring-2 ring-blue-300'
                : 'bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700'
            }`}
          >
            🛡️ 后手
          </button>
        </div>
      </div>

      {/* 游戏控制 */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></span>
          游戏控制
        </h3>
        <div className="space-y-3">
          <button
            onClick={resetGame}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            🔄 重新开始
          </button>
          <button
            onClick={initializeBoard}
            className="w-full px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            🎯 开局
          </button>
        </div>
      </div>
    </div>
  )
}