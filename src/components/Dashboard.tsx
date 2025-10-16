import { Shield, AlertTriangle, TrendingUp, Activity, Eye, Download, FileText } from 'lucide-react';
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
    { label: '检测威胁', value: stats.threats, change: '+12%', icon: AlertTriangle, color: 'orange' },
    { label: '拦截攻击', value: stats.blocked, change: '+8%', icon: Shield, color: 'blue' },
    { label: '模型准确率', value: `${stats.accuracy.toFixed(1)}%`, change: '+0.3%', icon: TrendingUp, color: 'green' },
    { label: '系统可用性', value: `${stats.uptime.toFixed(1)}%`, change: '稳定', icon: Activity, color: 'purple' },
  ];

  const recentThreats = [
    { id: 1, sequence: '1', name: 'SQL注入攻击检测项目', status: '已解析', time: '2025-10-13 09:09:47', level: '高危' },
    { id: 2, sequence: '2', name: '软件系统开发项目', status: '已完成', time: '2025-10-13 09:07:17', level: '中危' },
    { id: 3, sequence: '3', name: 'XSS跨站脚本防护', status: '已完成', time: '2025-10-13 06:35:21', level: '高危' },
    { id: 4, sequence: '4', name: '软件系统开发项目', status: '解析失败', time: '2025-10-12 11:00:00', level: '严重' },
    { id: 5, sequence: '5', name: '办公楼智能化系统集成项目', status: '解析中', time: '2025-10-11 14:20:00', progress: '65%', level: '中危' },
    { id: 6, sequence: '6', name: '市政道路改造工程项目', status: '待解析', time: '2025-10-10 09:30:00', level: '低危' },
    { id: 7, sequence: '7', name: '医院设备采购项目', status: '已完成', time: '2025-10-09 16:45:00', level: '中危' },
    { id: 8, sequence: '8', name: '城市绿化景观工程', status: '已完成', time: '2025-10-08 10:15:00', level: '低危' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case '已解析':
        return 'bg-green-50 text-green-700 border-green-200';
      case '已完成':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case '解析失败':
        return 'bg-red-50 text-red-700 border-red-200';
      case '解析中':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case '待解析':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 bg-${card.color}-500 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                  {card.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{card.value}</div>
              <div className="text-sm text-gray-600">{card.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">威胁项目管理</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">选择</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">序号</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">招标项目名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">上传时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentThreats.map((threat) => (
                <tr key={threat.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{threat.sequence}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{threat.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${getStatusStyle(threat.status)}`}>
                      {threat.status}
                      {threat.progress && <span className="ml-1">{threat.progress}</span>}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{threat.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>编辑</span>
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>查看</span>
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>下载</span>
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <span>删除</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            共 8 条
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              上一页
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
              下一页
            </button>
            <select className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600">
              <option>10条/页</option>
              <option>20条/页</option>
              <option>50条/页</option>
            </select>
            <button className="px-4 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              跳转
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
