import { Shield, AlertTriangle, TrendingUp, Activity, Eye, Zap, Network, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    threats: 0,
    blocked: 0,
    accuracy: 0,
    uptime: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        threats: Math.floor(Math.random() * 100) + 1200,
        blocked: Math.floor(Math.random() * 50) + 850,
        accuracy: 98.5 + Math.random() * 1.5,
        uptime: 99.8 + Math.random() * 0.2,
      });
    }, 3000);

    setStats({
      threats: 1247,
      blocked: 873,
      accuracy: 99.2,
      uptime: 99.9,
    });

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    { label: '检测威胁', value: stats.threats, change: '+12%', icon: AlertTriangle, color: 'red', gradient: 'from-red-500 to-rose-600' },
    { label: '拦截攻击', value: stats.blocked, change: '+8%', icon: Shield, color: 'blue', gradient: 'from-blue-500 to-blue-600' },
    { label: '模型准确率', value: `${stats.accuracy.toFixed(1)}%`, change: '+0.3%', icon: TrendingUp, color: 'green', gradient: 'from-green-500 to-emerald-600' },
    { label: '系统可用性', value: `${stats.uptime.toFixed(1)}%`, change: '稳定', icon: Activity, color: 'orange', gradient: 'from-orange-500 to-amber-600' },
  ];

  const recentThreats = [
    { time: '14:32:15', type: 'SQL注入攻击', level: '高危', source: '203.0.113.42', status: '已拦截', target: 'api.example.com/login' },
    { time: '14:28:09', type: 'XSS跨站脚本', level: '中危', source: '198.51.100.23', status: '已拦截', target: 'app.example.com/search' },
    { time: '14:25:43', type: 'DDoS攻击', level: '高危', source: '192.0.2.146', status: '处理中', target: 'cdn.example.com' },
    { time: '14:22:31', type: '暴力破解', level: '中危', source: '203.0.113.87', status: '已拦截', target: 'admin.example.com' },
    { time: '14:18:56', type: '端口扫描', level: '低危', source: '198.51.100.91', status: '已拦截', target: '*.example.com' },
  ];

  const securityModules = [
    { name: '威胁检测引擎', status: 'active', efficiency: 99.2, requests: 15234 },
    { name: '行为分析模块', status: 'active', efficiency: 98.7, requests: 12890 },
    { name: '入侵防御系统', status: 'active', efficiency: 99.5, requests: 10456 },
    { name: '深度学习模型', status: 'active', efficiency: 97.8, requests: 9821 },
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-white rounded-lg p-5 border border-gray-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 bg-gradient-to-br ${card.gradient} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  {card.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-0.5">{card.value}</div>
              <div className="text-sm text-gray-500">{card.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-lg p-5 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">实时威胁监控</h3>
            <div className="flex items-center space-x-1.5 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>自动刷新</span>
            </div>
          </div>
          <div className="space-y-3">
            {recentThreats.map((threat, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-gray-50 rounded border border-gray-200 hover:border-gray-300 transition-all duration-150"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500 font-mono bg-white px-2 py-1 rounded border border-gray-200">{threat.time}</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">{threat.type}</span>
                      <span className="text-xs text-gray-500">{threat.target}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                        threat.level === '高危'
                          ? 'bg-red-50 text-red-700 border-red-200'
                          : threat.level === '中危'
                          ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {threat.level}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                        threat.status === '已拦截'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-orange-50 text-orange-700 border border-orange-200'
                      }`}
                    >
                      {threat.status}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  来源: <span className="font-mono text-gray-900">{threat.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <h3 className="text-base font-semibold text-gray-900 mb-4">安全模块</h3>
          <div className="space-y-4">
            {securityModules.map((module, idx) => (
              <div key={idx} className="p-3.5 bg-gray-50 rounded border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-900">{module.name}</span>
                  </div>
                  <span className="text-xs text-gray-600">{module.efficiency}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${module.efficiency}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>今日处理请求</span>
                  <span className="font-semibold text-blue-600">{module.requests.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">网络流量</div>
              <div className="text-2xl font-bold text-gray-900">2.3 GB/s</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">入站流量</span>
              <span className="font-semibold text-gray-900">1.4 GB/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">出站流量</span>
              <span className="font-semibold text-gray-900">0.9 GB/s</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-11 h-11 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">拦截率</div>
              <div className="text-2xl font-bold text-gray-900">70.0%</div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">今日拦截</span>
              <span className="font-semibold text-green-600">873</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">误报率</span>
              <span className="font-semibold text-gray-900">0.03%</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-5 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-blue-100 mb-1">综合安全评分</div>
              <div className="text-4xl font-bold">9.8</div>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-sm text-blue-100">安全态势优秀</div>
        </div>
      </div>
    </div>
  );
}
