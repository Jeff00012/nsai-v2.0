import { useState, useEffect } from 'react';
import { Activity, AlertCircle, CheckCircle, Clock, Zap } from 'lucide-react';

export default function RealTimeAnalysis() {
  const [activeAlerts, setActiveAlerts] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlerts(Math.floor(Math.random() * 5) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const getRiskStyle = (risk: string) => {
    switch (risk) {
      case 'critical':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'high':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
          <AlertCircle className="w-4 h-4 text-red-600 animate-pulse" />
          <span className="text-sm text-red-700 font-medium">{activeAlerts} 活跃警报</span>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
          <Activity className="w-4 h-4 text-green-600 animate-pulse" />
          <span className="text-sm text-green-700 font-medium">AI分析中</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-xs text-green-600 font-semibold">+15%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">48,251</div>
          <div className="text-sm text-gray-600">实时分析请求</div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Activity className="w-8 h-8 text-green-600" />
            <span className="text-xs text-green-600 font-semibold">99.8%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">12ms</div>
          <div className="text-sm text-gray-600">平均响应时间</div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
            <span className="text-xs text-green-600 font-semibold">+8%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">838</div>
          <div className="text-sm text-gray-600">成功拦截</div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <AlertCircle className="w-8 h-8 text-orange-600" />
            <span className="text-xs text-green-600 font-semibold">+0.5%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">99.3%</div>
          <div className="text-sm text-gray-600">检测准确率</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">实时事件流</h2>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">实时更新</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">事件</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">来源IP</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">风险等级</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">处理动作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {liveEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="font-mono">{event.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{event.event}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{event.ip}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-0.5 rounded text-xs font-medium border ${getRiskStyle(event.risk)}`}>
                      {event.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">{event.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">共 8 条</div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">上一页</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
