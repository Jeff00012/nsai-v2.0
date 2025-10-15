import { useState, useEffect } from 'react';
import { Activity, AlertCircle, CheckCircle, Clock, Globe, Server, TrendingUp, Zap } from 'lucide-react';

export default function RealTimeAnalysis() {
  const [activeAlerts, setActiveAlerts] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlerts(Math.floor(Math.random() * 5) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const threatLevels = [
    { level: '严重', count: 2, color: 'red', percentage: 15 },
    { level: '高危', count: 8, color: 'orange', percentage: 25 },
    { level: '中危', count: 24, color: 'yellow', percentage: 35 },
    { level: '低危', count: 41, color: 'blue', percentage: 25 },
  ];

  const liveEvents = [
    { id: 1, time: '14:42:33', event: '检测到异常登录尝试', ip: '203.0.113.42', risk: 'high', action: '自动拦截' },
    { id: 2, time: '14:41:58', event: 'SQL注入攻击拦截', ip: '198.51.100.23', risk: 'critical', action: '已拦截' },
    { id: 3, time: '14:41:12', event: '恶意文件上传阻止', ip: '192.0.2.146', risk: 'high', action: '已拦截' },
    { id: 4, time: '14:40:45', event: 'API频率限制触发', ip: '203.0.113.87', risk: 'medium', action: '限流处理' },
    { id: 5, time: '14:40:21', event: '端口扫描行为检测', ip: '198.51.100.91', risk: 'medium', action: '监控中' },
    { id: 6, time: '14:39:56', event: 'XSS攻击拦截', ip: '192.0.2.234', risk: 'high', action: '已拦截' },
    { id: 7, time: '14:39:33', event: '可疑User-Agent检测', ip: '203.0.113.156', risk: 'low', action: '记录日志' },
    { id: 8, time: '14:39:08', event: '暴力破解尝试阻止', ip: '198.51.100.67', risk: 'high', action: '已拦截' },
  ];

  const aiModels = [
    { name: '深度威胁检测', status: 'active', requests: 15234, latency: '12ms' },
    { name: '行为分析引擎', status: 'active', requests: 12890, latency: '8ms' },
    { name: '异常检测模型', status: 'active', requests: 10456, latency: '15ms' },
    { name: '智能决策系统', status: 'active', requests: 9821, latency: '10ms' },
  ];

  const geographicThreats = [
    { region: '北美', threats: 342, blocked: 328, rate: 95.9 },
    { region: '欧洲', threats: 256, blocked: 251, rate: 98.0 },
    { region: '亚洲', threats: 189, blocked: 185, rate: 97.9 },
    { region: '其他', threats: 78, blocked: 74, rate: 94.9 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
          <AlertCircle className="w-4 h-4 text-red-600 animate-pulse" />
          <span className="text-sm text-red-700 font-medium">{activeAlerts} 活跃警报</span>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
          <Activity className="w-4 h-4 text-green-600 animate-pulse" />
          <span className="text-sm text-green-700 font-medium">AI分析中</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-xs text-green-600 font-semibold">+15%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">48,251</div>
          <div className="text-sm text-gray-600">实时分析请求</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <Server className="w-8 h-8 text-green-600" />
            <span className="text-xs text-green-600 font-semibold">99.8%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">12ms</div>
          <div className="text-sm text-gray-600">平均响应时间</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
            <span className="text-xs text-green-600 font-semibold">+8%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">838</div>
          <div className="text-sm text-gray-600">成功拦截</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-orange-600" />
            <span className="text-xs text-green-600 font-semibold">+0.5%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">99.3%</div>
          <div className="text-sm text-gray-600">检测准确率</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">实时事件流</h2>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">实时更新</span>
            </div>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
            {liveEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-semibold text-gray-900">{event.event}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                          event.risk === 'critical'
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : event.risk === 'high'
                            ? 'bg-orange-50 text-orange-700 border border-orange-200'
                            : event.risk === 'medium'
                            ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {event.risk}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span className="font-mono">{event.time}</span>
                      <span>•</span>
                      <span className="font-mono">{event.ip}</span>
                      <span>•</span>
                      <span className="text-blue-600 font-medium">{event.action}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-6">威胁等级分布</h2>
            <div className="space-y-4">
              {threatLevels.map((threat) => (
                <div key={threat.level}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 bg-${threat.color}-500 rounded-full`}></div>
                      <span className="text-sm font-semibold text-gray-900">{threat.level}</span>
                    </div>
                    <span className="text-sm text-gray-600">{threat.count}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${threat.color}-500 rounded-full transition-all duration-500`}
                      style={{ width: `${threat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">地理分布</h2>
            </div>
            <div className="space-y-4">
              {geographicThreats.map((geo) => (
                <div key={geo.region} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{geo.region}</span>
                    <span className="text-xs text-green-600 font-semibold">{geo.rate}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{geo.threats} 威胁</span>
                    <span>{geo.blocked} 已拦截</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: `${geo.rate}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-6">AI模型运行状态</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiModels.map((model) => (
            <div key={model.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-900">{model.name}</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">请求数</span>
                  <span className="text-blue-600 font-semibold">{model.requests.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">延迟</span>
                  <span className="text-green-600 font-semibold">{model.latency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
