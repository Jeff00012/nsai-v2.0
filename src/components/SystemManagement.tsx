import { useState } from 'react';
import { Bell, Database, HardDrive, Key, Network, Server, Shield, Users, AlertCircle, CheckCircle, Settings } from 'lucide-react';

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

  const securityPolicies = [
    { name: '密码强度要求', enabled: true, description: '至少12位，包含大小写字母、数字和特殊字符' },
    { name: '双因素认证', enabled: true, description: '所有管理员账户必须启用2FA' },
    { name: '会话超时', enabled: true, description: '30分钟无操作自动登出' },
    { name: 'IP白名单', enabled: false, description: '限制管理后台访问IP' },
    { name: '操作审计', enabled: true, description: '记录所有系统配置变更' },
  ];

  const alerts = [
    { time: '10分钟前', type: 'warning', message: '告警通知服务已停止' },
    { time: '2小时前', type: 'info', message: '系统配置已更新' },
    { time: '5小时前', type: 'success', message: '数据库备份已完成' },
  ];

  const tabs = [
    { id: 'overview', label: '系统概览' },
    { id: 'services', label: '服务管理' },
    { id: 'users', label: '用户管理' },
    { id: 'security', label: '安全策略' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-1 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Bell className="w-5 h-5 text-blue-600" />
                    <span>系统告警</span>
                  </h3>
                  <div className="space-y-3">
                    {alerts.map((alert, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        {alert.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />}
                        {alert.type === 'info' && <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                        {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />}
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 font-medium">{alert.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Server className="w-5 h-5 text-blue-600" />
                    <span>服务状态概览</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="text-sm text-gray-600">总服务数</span>
                      <span className="text-lg font-bold text-gray-900">{services.length}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="text-sm text-gray-600">运行中</span>
                      <span className="text-lg font-bold text-green-600">{services.filter((s) => s.status === 'running').length}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="text-sm text-gray-600">已停止</span>
                      <span className="text-lg font-bold text-red-600">{services.filter((s) => s.status === 'stopped').length}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="text-sm text-gray-600">平均正常运行时间</span>
                      <span className="text-lg font-bold text-blue-600">99.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${service.status === 'running' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{service.name}</div>
                      <div className="text-xs text-gray-500">端口: {service.port}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-xs text-gray-500">正常运行时间</div>
                      <div className="text-sm font-semibold text-blue-600">{service.uptime}</div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        service.status === 'running'
                          ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                          : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                      }`}
                    >
                      {service.status === 'running' ? '停止' : '启动'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">总用户数: {users.length}</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30">
                  添加用户
                </button>
              </div>
              {users.map((user) => (
                <div key={user.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{user.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-xs text-gray-500">最后登录</div>
                      <div className="text-sm text-gray-700">{user.lastLogin}</div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === 'online'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : user.status === 'away'
                          ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {user.status === 'online' ? '在线' : user.status === 'away' ? '离开' : '离线'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">安全策略配置</span>
              </div>
              {securityPolicies.map((policy) => (
                <div key={policy.name} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Key className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-900">{policy.name}</span>
                    </div>
                    <p className="text-xs text-gray-600">{policy.description}</p>
                  </div>
                  <button
                    className={`ml-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      policy.enabled ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        policy.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
