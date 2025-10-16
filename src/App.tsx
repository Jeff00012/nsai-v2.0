import { useState } from 'react';
import Dashboard from './components/Dashboard';
import RealTimeAnalysis from './components/RealTimeAnalysis';
import ModelTuning from './components/ModelTuning';
import SystemManagement from './components/SystemManagement';
import { Shield, Activity, Settings, Zap, Bell, User } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', name: '仪表板', icon: Shield },
    { id: 'realtime', name: '实时研判', icon: Activity },
    { id: 'tuning', name: '模型微调', icon: Zap },
    { id: 'system', name: '系统管理', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      {/* Top Header Bar - Fixed */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-blue-500 rounded flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">全自动人工智能网络安全系统 v2.0</h1>
              <p className="text-xs text-gray-500">智能标准化系统</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Bot className="w-5 h-5" />
            </button>
            <button className="relative text-gray-500 hover:text-gray-700">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</span>
            </button>
            <div className="flex items-center space-x-2 pl-4 border-l border-gray-200">
              <User className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">admin</div>
                <div className="text-xs text-gray-500">超级管理员</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Left Sidebar Navigation */}
        <aside className="w-52 bg-white shadow-sm flex flex-col h-[calc(100vh-65px)] sticky top-[65px]">
          {/* Navigation Menu */}
          <nav className="flex-1 px-2 py-6">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Status Footer */}
          <div className="px-4 py-4 border-t border-gray-100">
            <div className="bg-green-50 rounded-lg px-3 py-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">系统运行正常</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-[#f8f9fa]">
          {/* Sub Header showing current tab */}
          <div className="bg-white px-8 py-5 mb-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              {navigation.find(item => item.id === activeTab)?.name}
            </h2>
          </div>

          {/* Content */}
          <div className="px-8 pb-8">
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'realtime' && <RealTimeAnalysis />}
            {activeTab === 'tuning' && <ModelTuning />}
            {activeTab === 'system' && <SystemManagement />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
