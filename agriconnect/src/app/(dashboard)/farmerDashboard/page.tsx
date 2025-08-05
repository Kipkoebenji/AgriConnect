"use client";
// pages/dashboard.js
import { useState } from 'react';
import { 
  Wheat, 
  Cloud, 
  TrendingUp, 
  MessageSquare, 
  Menu,
  X,
  Sun,
  CloudRain,
  DollarSign,
  Package
} from 'lucide-react';

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState('produce');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'produce', label: 'My Produce', icon: Wheat },
    { id: 'weather', label: 'Weather', icon: Cloud },
    { id: 'market', label: 'Market Prices', icon: TrendingUp },
    { id: 'messages', label: 'Messages', icon: MessageSquare }
  ];

  const sampleProduce = [
    { name: 'Tomatoes', quantity: '500 kg', status: 'Ready', price: '$2.50/kg' },
    { name: 'Corn', quantity: '1200 kg', status: 'Growing', price: '$1.80/kg' },
    { name: 'Carrots', quantity: '300 kg', status: 'Harvested', price: '$3.20/kg' }
  ];

  const sampleMessages = [
    { from: 'Green Valley Market', message: 'Interested in your organic tomatoes. Can we discuss bulk pricing?', time: '2 hours ago' },
    { from: 'Farm Fresh Co.', message: 'Need 200kg carrots by Friday. Are they available?', time: '5 hours ago' },
    { from: 'Local Restaurant', message: 'Weekly supply contract for fresh produce needed.', time: '1 day ago' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'produce':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Produce</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sampleProduce.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                    <Package className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
                  <p className="text-gray-600 mb-2">Status: 
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                      item.status === 'Ready' ? 'bg-green-100 text-green-800' :
                      item.status === 'Growing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </p>
                  <p className="text-gray-800 font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'weather':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Weather Forecast</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Today</h3>
                  <p className="text-gray-600">Partly Cloudy</p>
                </div>
                <Sun className="h-12 w-12 text-yellow-500" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-gray-800">24°C</p>
                  <p className="text-gray-600">High</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">18°C</p>
                  <p className="text-gray-600">Low</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {['Tomorrow', 'Day 3', 'Day 4'].map((day, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">{day}</h4>
                  <CloudRain className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-gray-800">22°C / 16°C</p>
                  <p className="text-sm text-gray-600">Light Rain</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Market Prices</h2>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produce</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { name: 'Tomatoes', price: '$2.50/kg', change: '+5%', positive: true },
                    { name: 'Corn', price: '$1.80/kg', change: '-2%', positive: false },
                    { name: 'Carrots', price: '$3.20/kg', change: '+8%', positive: true },
                    { name: 'Potatoes', price: '$1.20/kg', change: '+3%', positive: true },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {item.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Messages from Buyers</h2>
            <div className="space-y-4">
              {sampleMessages.map((msg, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-800">{msg.from}</h3>
                    <span className="text-sm text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{msg.message}</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    Reply
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Farm Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:flex-col lg:w-64 lg:bg-white lg:border-r lg:border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-8">
              <h1 className="text-2xl font-bold text-green-600">Farm Dashboard</h1>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left ${
                      activeTab === item.id
                        ? 'bg-green-100 text-green-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="mr-3 h-6 w-6 flex-shrink-0" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4 mb-8">
                  <h1 className="text-2xl font-bold text-green-600">Farm Dashboard</h1>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setSidebarOpen(false);
                        }}
                        className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left ${
                          activeTab === item.id
                            ? 'bg-green-100 text-green-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <Icon className="mr-3 h-6 w-6 flex-shrink-0" />
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6 px-4 sm:px-6 lg:px-8 pb-24 lg:pb-6">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center py-2 px-3 rounded-md ${
                  activeTab === item.id
                    ? 'text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}