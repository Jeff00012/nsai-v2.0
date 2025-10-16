import { useState } from 'react';
import { Brain, Cpu, Database, Play, Save, Settings, TrendingUp } from 'lucide-react';

export default function ModelTuning() {
  const [selectedModel, setSelectedModel] = useState('threat-detection');
  const [training, setTraining] = useState(false);

  const models = [
    { id: 'threat-detection', name: '威胁检测模型', version: 'v3.2.1', accuracy: 99.2, status: 'active', lastTrained: '2 小时前' },
    { id: 'behavior-analysis', name: '行为分析模型', version: 'v2.8.5', accuracy: 98.7, status: 'active', lastTrained: '5 小时前' },
    { id: 'anomaly-detection', name: '异常检测模型', version: 'v4.1.0', accuracy: 97.8, status: 'active', lastTrained: '1 天前' },
    { id: 'deep-learning', name: '深度学习模型', version: 'v1.5.3', accuracy: 96.5, status: 'training', lastTrained: '正在训练' },
  ];

  const trainingMetrics = [
    { epoch: 1, loss: 0.245, accuracy: 94.2, valLoss: 0.268, valAccuracy: 93.8 },
    { epoch: 2, loss: 0.198, accuracy: 95.6, valLoss: 0.215, valAccuracy: 95.1 },
    { epoch: 3, loss: 0.165, accuracy: 96.8, valLoss: 0.182, valAccuracy: 96.3 },
    { epoch: 4, loss: 0.142, accuracy: 97.5, valLoss: 0.159, valAccuracy: 97.2 },
    { epoch: 5, loss: 0.128, accuracy: 98.1, valLoss: 0.145, valAccuracy: 97.8 },
  ];

  const hyperparameters = [
    { name: '学习率', value: 0.001, min: 0.0001, max: 0.01 },
    { name: '批次大小', value: 32, min: 8, max: 128 },
    { name: '训练轮次', value: 100, min: 10, max: 500 },
    { name: 'Dropout率', value: 0.3, min: 0.1, max: 0.5 },
  ];

  const handleTraining = () => {
    setTraining(true);
    setTimeout(() => setTraining(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end space-x-3">
        <button className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-all duration-200 border border-gray-300 shadow-sm">
          <Save className="w-4 h-4" />
          <span className="text-sm font-medium">保存配置</span>
        </button>
        <button
          onClick={handleTraining}
          disabled={training}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          <Play className="w-4 h-4" />
          <span className="text-sm font-medium">{training ? '训练中...' : '开始训练'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {models.map((model) => (
          <div
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            className={`cursor-pointer bg-white rounded-lg p-5 transition-all duration-200 shadow-sm ${
              selectedModel === model.id
                ? 'ring-2 ring-blue-500'
                : 'hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <Brain className={`w-8 h-8 ${selectedModel === model.id ? 'text-blue-600' : 'text-gray-400'}`} />
              <span
                className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  model.status === 'active'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-orange-50 text-orange-700 border border-orange-200'
                }`}
              >
                {model.status === 'active' ? '运行中' : '训练中'}
              </span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">{model.name}</h3>
            <p className="text-xs text-gray-500 mb-3">{model.version}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">准确率</span>
              <span className="text-sm font-bold text-blue-600">{model.accuracy}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">训练指标</h2>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {trainingMetrics.map((metric) => (
              <div key={metric.epoch} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-900">训练轮次 {metric.epoch}</span>
                  <span className="text-xs text-blue-600 font-semibold">准确率: {metric.accuracy}%</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">训练损失</span>
                      <span className="text-xs font-semibold text-gray-900">{metric.loss.toFixed(3)}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                        style={{ width: `${(1 - metric.loss) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">验证损失</span>
                      <span className="text-xs font-semibold text-gray-900">{metric.valLoss.toFixed(3)}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"
                        style={{ width: `${(1 - metric.valLoss) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
              <Settings className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">超参数配置</h2>
            </div>
            <div className="p-6 space-y-4">
              {hyperparameters.map((param) => (
                <div key={param.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">{param.name}</span>
                    <span className="text-sm text-blue-600 font-mono font-semibold">{param.value}</span>
                  </div>
                  <input
                    type="range"
                    min={param.min}
                    max={param.max}
                    step={(param.max - param.min) / 100}
                    defaultValue={param.value}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">{param.min}</span>
                    <span className="text-xs text-gray-400">{param.max}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">计算资源</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">GPU使用率</span>
                  <span className="text-sm font-semibold text-gray-900">78%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">内存使用</span>
                  <span className="text-sm font-semibold text-gray-900">12.4 GB</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">CPU使用率</span>
                  <span className="text-sm font-semibold text-gray-900">45%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-600 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
