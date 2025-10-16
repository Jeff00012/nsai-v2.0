import { useState } from 'react';
import { Bell, Database, HardDrive, Network, Server, Shield, Users, AlertCircle, CheckCircle } from 'lucide-react';

export default function SystemManagement() {
  const [activeTab, setActiveTab] = useState('overview');

  const systemMetrics = [
    { label: 'CPU使用率', value: '42%', status: 'good', icon: Server },
    { label: '内存使用', value: '8.2/16 GB', status: 'good', icon: HardDrive },
    { label: '磁盘空间', value: '156/500 GB', status: 'good', icon: Database },
    { label: '网络流量', value: '2.3 GB/s', status: 'good', icon: Network },
  ];

  const services = [
    { name: 'AI检测引擎', status: 'running', uptime: '99.9%', port: '8080' },
    { name: '威胁情报服务', status: 'running', uptime: '99.8%', port: '8081' },
    { name: '日志分析服务', status: 'running', uptime: '99.7%', port: '8082' },
    { name: '数据同步服务', status: 'running', uptime: '99.6%', port: '8083' },
    { name: 'API网关', status: 'running', uptime: '99.9%', port: '8084' },
    { name: '告警通知服务', status: 'stopped', uptime: '0%', port: '8085' },
  ];

  const users = [
    { name: '张三', role: '系统管理员', lastLogin: '2分钟前', status: 'online' },
    { name: '李四', role: '安全分析师', lastLogin: '15分钟前', status: 'online' },
    { name: '王五', role: '运维工程师', lastLogin: '1小时前', status: 'away' },
    { name: '赵六', role: '审计员', lastLogin: '2天前', status: 'offline' },
  ];

  const tabs = [
    { id: 'overview', label: '系统概览' },
    { id: 'services', label: '服务管理' },
    { id: 'users', label: '用户管理' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {systemMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-1 px-6 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Bell className="w-5 h-5 text-blue-600" />
                  <span>系统告警</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">告警通知服务已停止</p>
                      <p className="text-xs text-gray-500 mt-1">10分钟前</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">系统配置已更新</p>
                      <p className="text-xs text-gray-500 mt-1">2小时前</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">数据库备份已完成</p>
                      <p className="text-xs text-gray-500 mt-1">5小时前</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">服务名称</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">端口</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">状态</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">正常运行时间</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">操作</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {services.map((service) => (
                    <tr key={service.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{service.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{service.port}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${
                          service.status === 'running'
                            ? 'bg-green-50 text-green-700 border-green-200'
                            : 'bg-red-50 text-red-700 border-red-200'
                        }`}>
                          <div className={`w-2 h-2 rounded-full mr-2 ${service.status === 'running' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          {service.status === 'running' ? '运行中' : '已停止'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-blue-600 font-semibold">{service.uptime}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className={`px-4 py-1.5 rounded text-xs font-semibold transition-all duration-200 ${
                          service.status === 'running'
                            ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                            : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                        }`}>
                          {service.status === 'running' ? '停止' : '启动'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">总用户数: {users.length}</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm">
                  添加用户
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">用户</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">角色</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">最后登录</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">状态</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.name} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold">{user.name[0]}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.lastLogin}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === 'online'
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : user.status === 'away'
                              ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                              : 'bg-gray-100 text-gray-600 border border-gray-200'
                          }`}>
                            {user.status === 'online' ? '在线' : user.status === 'away' ? '离开' : '离线'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
