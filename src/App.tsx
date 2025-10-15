import { useState } from 'react';
import Dashboard from './components/Dashboard';
import RealTimeAnalysis from './components/RealTimeAnalysis';
import ModelTuning from './components/ModelTuning';
import SystemManagement from './components/SystemManagement';
import { Shield, Activity, Settings, Zap, Bell, User, Bot } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', name: '仪表板', icon: Shield },
    { id: 'realtime', name: '实时研判', icon: Activity },
    { id: 'tuning', name: '模型微调', icon: Zap },
    { id: 'system', name: '系统管理', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex">
      {/* Left Sidebar Navigation */}
      <aside className="w-52 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
        {/* Logo Section */}
        <div className="px-5 py-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div>
              <h1 className="text-sm font-semibold text-gray-900">网络安全AI系统 v2.0</h1>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 py-4">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded text-sm transition-all duration-150 ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Status Footer */}
        <div className="px-3 py-4 border-t border-gray-200">
          <div className="bg-green-50 rounded px-3 py-2 border border-green-100">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">系统运行正常</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        {/* Top Header Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {navigation.find(item => item.id === activeTab)?.name}
            </h2>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Bot className="w-5 h-5" />
              </button>
              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2 pl-3 ml-1 border-l border-gray-200">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-900">admin</div>
                  <div className="text-xs text-gray-500">超级管理员</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'realtime' && <RealTimeAnalysis />}
          {activeTab === 'tuning' && <ModelTuning />}
          {activeTab === 'system' && <SystemManagement />}
        </div>
      </main>
    </div>
  );
}

export default App;
