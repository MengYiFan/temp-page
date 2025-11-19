import { useGameStore } from '../stores/gameStore'

export default function GameStatus() {
  const { 
    gameMode, 
    playerColor, 
    currentPlayer, 
    winRate, 
    totalGames, 
    wins,
    isAiThinking 
  } = useGameStore()

  const getDifficultyText = (mode: string) => {
    const texts = {
      easy: '简单',
      medium: '中等', 
      hard: '困难',
      expert: '专家'
    }
    return texts[mode as keyof typeof texts] || '未知'
  }

  const getDifficultyColor = (mode: string) => {
    const colors = {
      easy: 'text-green-600',
      medium: 'text-yellow-600',
      hard: 'text-orange-600', 
      expert: 'text-red-600'
    }
    return colors[mode as keyof typeof colors] || 'text-gray-600'
  }

  const getDifficultyIcon = (mode: string) => {
    const icons = {
      easy: '🌱',
      medium: '🎯',
      hard: '🔥',
      expert: '👑'
    }
    return icons[mode as keyof typeof icons] || '❓'
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-gray-800">游戏状态</h3>
      </div>
      
      <div className="space-y-5">
        {/* 当前难度 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">当前难度</span>
            <div className="flex items-center gap-2">
              <span className="text-lg">{getDifficultyIcon(gameMode)}</span>
              <span className={`font-bold text-lg ${getDifficultyColor(gameMode)}`}>
                {getDifficultyText(gameMode)}
              </span>
            </div>
          </div>
        </div>

        {/* 玩家信息 */}
        <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4 border border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">你的棋子</span>
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full border-2 shadow-lg ${
                playerColor === 'black' 
                  ? 'bg-gradient-to-br from-gray-800 to-black border-gray-900' 
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-300'
              }`}></div>
              <span className="font-bold text-gray-800">
                {playerColor === 'black' ? '黑子' : '白子'}
              </span>
            </div>
          </div>
        </div>

        {/* 当前回合 */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">当前回合</span>
            <div className="flex items-center gap-3">
              {isAiThinking ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                  <span className="text-blue-600 font-bold">AI思考中...</span>
                </div>
              ) : (
                <>
                  <div className={`w-6 h-6 rounded-full border-2 shadow-lg transition-all duration-300 ${
                    currentPlayer === 'black' 
                      ? 'bg-gradient-to-br from-gray-800 to-black border-gray-900' 
                      : 'bg-gradient-to-br from-white to-gray-100 border-gray-300'
                  } ${currentPlayer === playerColor ? 'animate-pulse ring-2 ring-blue-400' : ''}`}></div>
                  <span className={`font-bold ${
                    currentPlayer === playerColor ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {currentPlayer === playerColor ? '你的回合' : 'AI回合'}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 胜率统计 */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">📊</span>
            <h4 className="font-bold text-gray-800">胜率统计</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">胜率</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                    style={{ width: `${winRate}%` }}
                  ></div>
                </div>
                <span className="font-bold text-green-600">{winRate}%</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">总局数</span>
              <span className="font-semibold text-gray-800">{totalGames}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">胜利</span>
              <span className="font-semibold text-green-600">{wins}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">失败</span>
              <span className="font-semibold text-red-600">{totalGames - wins}</span>
            </div>
          </div>
        </div>

        {/* 难度提示 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💡</span>
            <span className="font-semibold text-purple-800">难度提示</span>
          </div>
          <div className="text-sm text-purple-700 leading-relaxed">
            {gameMode === 'easy' && '🌱 简单模式：AI会随机下棋，适合新手练习'}
            {gameMode === 'medium' && '🎯 中等模式：AI会考虑基本策略，需要一定技巧'}
            {gameMode === 'hard' && '🔥 困难模式：AI会优先考虑中心位置，挑战性较强'}
            {gameMode === 'expert' && '👑 专家模式：AI会使用高级策略，非常具有挑战性'}
          </div>
        </div>
      </div>
    </div>
  )
}