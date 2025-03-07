
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Volleyball, Trophy, Users } from 'lucide-react';

const SportsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sports</h1>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Sports</TabsTrigger>
          <TabsTrigger value="basketball">Basketball</TabsTrigger>
          <TabsTrigger value="football">Football</TabsTrigger>
          <TabsTrigger value="baseball">Baseball</TabsTrigger>
          <TabsTrigger value="hockey">Hockey</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Games</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { team1: "Lakers", score1: 112, team2: "Celtics", score2: 106 },
                    { team1: "Warriors", score1: 120, team2: "Bucks", score2: 110 },
                    { team1: "Heat", score1: 98, team2: "Bulls", score2: 104 },
                  ].map((game, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="text-right flex-1">
                        <p className="font-bold">{game.team1}</p>
                        <p className={game.score1 > game.score2 ? "text-green-500 font-bold" : ""}>
                          {game.score1}
                        </p>
                      </div>
                      <div className="px-4 text-gray-400">vs</div>
                      <div className="text-left flex-1">
                        <p className="font-bold">{game.team2}</p>
                        <p className={game.score2 > game.score1 ? "text-green-500 font-bold" : ""}>
                          {game.score2}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Games</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { team1: "Chiefs", team2: "Eagles", time: "Tomorrow, 7:30 PM" },
                    { team1: "Cowboys", team2: "49ers", time: "Sat, 4:00 PM" },
                    { team1: "Bengals", team2: "Ravens", time: "Sun, 1:00 PM" },
                  ].map((game, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="text-right flex-1">
                        <p className="font-bold">{game.team1}</p>
                      </div>
                      <div className="px-4 text-gray-400">vs</div>
                      <div className="text-left flex-1">
                        <p className="font-bold">{game.team2}</p>
                        <p className="text-xs text-gray-500">{game.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>League Standings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Team</th>
                      <th className="py-2 px-4">W</th>
                      <th className="py-2 px-4">L</th>
                      <th className="py-2 px-4">PCT</th>
                      <th className="py-2 px-4">GB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { team: "Boston Celtics", w: 48, l: 12, pct: ".800", gb: "-" },
                      { team: "Cleveland Cavaliers", w: 41, l: 19, pct: ".683", gb: "7.0" },
                      { team: "Milwaukee Bucks", w: 40, l: 21, pct: ".656", gb: "8.5" },
                      { team: "New York Knicks", w: 35, l: 25, pct: ".583", gb: "13.0" },
                      { team: "Orlando Magic", w: 34, l: 26, pct: ".567", gb: "14.0" },
                    ].map((team, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4 text-left">{team.team}</td>
                        <td className="py-2 px-4 text-center">{team.w}</td>
                        <td className="py-2 px-4 text-center">{team.l}</td>
                        <td className="py-2 px-4 text-center">{team.pct}</td>
                        <td className="py-2 px-4 text-center">{team.gb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="basketball" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Basketball Category</h3>
              <p>Filter applied for basketball news and scores.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="football" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Football Category</h3>
              <p>Filter applied for football news and scores.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="baseball" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Baseball Category</h3>
              <p>Filter applied for baseball news and scores.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="hockey" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Hockey Category</h3>
              <p>Filter applied for hockey news and scores.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SportsPage;
