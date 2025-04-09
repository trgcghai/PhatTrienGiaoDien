import React from "react";
import { ShoppingCart, DollarSign, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Turnover",
      value: "$92,405",
      change: 5.39,
      icon: ShoppingCart,
      bgColor: "bg-pink-50",
      iconBgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      title: "Profit",
      value: "$32,218",
      change: 5.39,
      icon: DollarSign,
      bgColor: "bg-blue-50",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "New customer",
      value: "298",
      change: 6.84,
      icon: Users,
      bgColor: "bg-purple-50",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`rounded-xl p-6 ${stat.bgColor}`}>
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="mb-1 text-gray-600">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div
                className={`rounded-lg p-3 ${stat.iconBgColor} ${stat.iconColor}`}
              >
                <stat.icon size={24} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">↑ {stat.change}%</span>
              <span className="text-gray-500">period of change</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
