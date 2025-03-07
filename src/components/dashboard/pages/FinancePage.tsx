
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart, PieChart, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const FinancePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <DollarSign className="h-4 w-4 text-yahoo-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,563.82</div>
            <div className="flex items-center text-green-500 text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+2.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Investments</CardTitle>
            <LineChart className="h-4 w-4 text-yahoo-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,275.40</div>
            <div className="flex items-center text-green-500 text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+4.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <BarChart className="h-4 w-4 text-yahoo-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,428.92</div>
            <div className="flex items-center text-red-500 text-xs">
              <TrendingDown className="h-3 w-3 mr-1" />
              <span>-1.8% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Amazon", amount: "-$128.40", date: "Mar 12, 2025", type: "expense" },
                { name: "Salary Deposit", amount: "+$3,400.00", date: "Mar 10, 2025", type: "income" },
                { name: "Apple Inc", amount: "-$699.99", date: "Mar 8, 2025", type: "expense" },
                { name: "Dividend Payment", amount: "+$42.50", date: "Mar 5, 2025", type: "income" },
                { name: "Netflix", amount: "-$14.99", date: "Mar 2, 2025", type: "expense" }
              ].map((transaction, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {transaction.type === 'income' ? (
                        <TrendingUp className={`h-4 w-4 text-green-500`} />
                      ) : (
                        <TrendingDown className={`h-4 w-4 text-red-500`} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <span className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-8">
              <PieChart className="h-36 w-36 text-yahoo-purple" />
            </div>
            <div className="space-y-2">
              {[
                { name: "Stocks", percentage: "45%", color: "bg-blue-500" },
                { name: "Bonds", percentage: "30%", color: "bg-green-500" },
                { name: "Cash", percentage: "15%", color: "bg-yellow-500" },
                { name: "Real Estate", percentage: "10%", color: "bg-purple-500" }
              ].map((asset, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${asset.color}`}></div>
                    <span>{asset.name}</span>
                  </div>
                  <span>{asset.percentage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancePage;
