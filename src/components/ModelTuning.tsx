import { useState } from 'react';
import { Brain, Cpu, Database, Play, Save, Settings, TrendingUp, Zap } from 'lucide-react';

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

  const datasetStats = [
    { category: '正常流量', samples: 2456789, percentage: 82 },
    { category: 'SQL注入', samples: 145623, percentage: 5 },
    { category: 'XSS攻击', samples: 123456, percentage: 4 },
    { category: 'DDoS', samples: 98234, percentage: 3 },
    { category: '其他威胁', samples: 178901, percentage: 6 },
  ];

  const handleTraining = () => {
    setTraining(true);
    setTimeout(() => setTraining(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end space-x-3">
        <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-all duration-200 border border-gray-300">
          <Save className="w-4 h-4" />
          <span className="text-sm font-medium">保存配置</span>
        </button>
        <button
          onClick={handleTraining}
          disabled={training}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
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
            className={`cursor-pointer bg-white rounded-xl p-5 border transition-all duration-200 shadow-sm ${
              selectedModel === model.id
                ? 'border-blue-500 ring-2 ring-blue-500/20'
                : 'border-gray-200 hover:border-gray-300'
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
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">训练指标</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Zap className="w-4 h-4" />
              <span>实时监控</span>
            </div>
          </div>

          <div className="space-y-4">
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

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">训练性能优秀</span>
            </div>
            <p className="text-xs text-gray-600">
              模型收敛良好，验证准确率达到 {trainingMetrics[trainingMetrics.length - 1].valAccuracy}%
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2 mb-6">
              <Settings className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">超参数配置</h2>
            </div>
            <div className="space-y-4">
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

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2 mb-6">
              <Cpu className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">计算资源</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">GPU使用率</span>
                  <span className="text-sm font-semibold text-gray-900">78%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">内存使用</span>
                  <span className="text-sm font-semibold text-gray-900">12.4 GB</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">CPU使用率</span>
                  <span className="text-sm font-semibold text-gray-900">45%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-amber-600 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-6">
          <Database className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-gray-900">训练数据集统计</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {datasetStats.map((stat) => (
            <div key={stat.category} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.samples.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mb-3">{stat.category}</div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 font-semibold">{stat.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
