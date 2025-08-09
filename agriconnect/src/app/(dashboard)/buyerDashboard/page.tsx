"use client";
// pages/buyer-dashboard.js
import { useState } from 'react';
import { sampleMessages } from '@/constants';
import { sampleProduce } from '@/constants';
import { 
  Search, 
  Heart, 
  TrendingUp, 
  MessageSquare, 
  Menu,
  X,
  ShoppingCart,
  Star,
  MapPin,
  Clock
} from 'lucide-react';

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState('browse');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'browse', label: 'Browse Produce', icon: Search },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'market', label: 'Market Prices', icon: TrendingUp },
    { id: 'messages', label: 'Messages', icon: MessageSquare }
  ];

  // const sampleProduce: SampleProduceProps[] = [
  //   { 
  //     id: 1,
  //     name: 'Organic Tomatoes', 
  //     farmer: 'Green Valley Farm', 
  //     location: 'California', 
  //     quantity: '500 kg available',
  //     price: '$2.50/kg',
  //     rating: 4.8,
  //     image: '🍅',
  //     freshness: 'Harvested today',
  //     isFavorite: true
  //   },
  //   { 
  //     id: 2,
  //     name: 'Sweet Corn', 
  //     farmer: 'Sunny Acres', 
  //     location: 'Iowa', 
  //     quantity: '1200 kg available',
  //     price: '$1.80/kg',
  //     rating: 4.6,
  //     image: '🌽',
  //     freshness: 'Harvested 2 days ago',
  //     isFavorite: false
  //   },
  //   { 
  //     id: 3,
  //     name: 'Baby Carrots', 
  //     farmer: 'Mountain View Farm', 
  //     location: 'Oregon', 
  //     quantity: '300 kg available',
  //     price: '$3.20/kg',
  //     rating: 4.9,
  //     image: '🥕',
  //     freshness: 'Harvested yesterday',
  //     isFavorite: true
  //   },
  //   { 
  //     id: 4,
  //     name: 'Red Potatoes', 
  //     farmer: 'Prairie Fields', 
  //     location: 'Idaho', 
  //     quantity: '800 kg available',
  //     price: '$1.20/kg',
  //     rating: 4.5,
  //     image: '🥔',
  //     freshness: 'Harvested 3 days ago',
  //     isFavorite: false
  //   }
  // ];

  // const sampleMessages = [
  //   { 
  //     from: 'Green Valley Farm', 
  //     subject: 'Bulk discount available',
  //     message: 'We can offer 15% discount for orders over 200kg of organic tomatoes.', 
  //     time: '1 hour ago',
  //     unread: true
  //   },
  //   { 
  //     from: 'Mountain View Farm', 
  //     subject: 'New harvest ready',
  //     message: 'Fresh batch of baby carrots just harvested. Premium quality available.', 
  //     time: '3 hours ago',
  //     unread: true
  //   },
  //   { 
  //     from: 'Sunny Acres', 
  //     subject: 'Re: Sweet corn inquiry',
  //     message: 'Yes, we can fulfill your weekly order of 100kg sweet corn. When do you need delivery?', 
  //     time: '1 day ago',
  //     unread: false
  //   }
  // ];

  const favorites = sampleProduce.filter(item => item.isFavorite);

  const renderContent = () => {
    switch (activeTab) {
      case 'browse':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Browse Produce</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Search produce..."
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sampleProduce.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-2">{item.image}</div>
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <Heart className={`h-5 w-5 ${item.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </button>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{item.farmer}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.freshness}
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{item.quantity}</p>
                  <p className="text-xl font-bold text-gray-800 mb-4">{item.price}</p>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'favorites':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Favorites</h2>
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No favorites yet. Start browsing to add some!</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {favorites.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl mb-2">{item.image}</div>
                      <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                    </div>
                    
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{item.farmer}</p>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {item.location}
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                    </div>
                    
                    <p className="text-xl font-bold text-gray-800 mb-4">{item.price}</p>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Quick Order
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weekly Change</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Price</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { name: 'Tomatoes', avgPrice: '$2.50/kg', change: '+5%', positive: true, bestPrice: '$2.20/kg' },
                    { name: 'Corn', avgPrice: '$1.80/kg', change: '-2%', positive: false, bestPrice: '$1.65/kg' },
                    { name: 'Carrots', avgPrice: '$3.20/kg', change: '+8%', positive: true, bestPrice: '$2.95/kg' },
                    { name: 'Potatoes', avgPrice: '$1.20/kg', change: '+3%', positive: true, bestPrice: '$1.10/kg' },
                    { name: 'Lettuce', avgPrice: '$2.80/kg', change: '-1%', positive: false, bestPrice: '$2.50/kg' },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.avgPrice}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {item.change}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                        {item.bestPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                💡 <strong>Tip:</strong> Best prices are updated hourly. Click on any produce to see current offers from farmers.
              </p>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Messages from Farmers</h2>
            <div className="space-y-4">
              {sampleMessages.map((msg, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 ${msg.unread ? 'border-l-4 border-l-blue-500' : ''}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 flex items-center">
                        {msg.from}
                        {msg.unread && <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">{msg.subject}</p>
                    </div>
                    <span className="text-sm text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{msg.message}</p>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Reply
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                      View Profile
                    </button>
                  </div>
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
          <h1 className="text-xl font-semibold text-gray-800">Buyer Dashboard</h1>
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
              <h1 className="text-2xl font-bold text-blue-600">Buyer Dashboard</h1>
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
                        ? 'bg-blue-100 text-blue-900'
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
                  <h1 className="text-2xl font-bold text-blue-600">Buyer Dashboard</h1>
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
                            ? 'bg-blue-100 text-blue-900'
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
                    ? 'text-blue-600'
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