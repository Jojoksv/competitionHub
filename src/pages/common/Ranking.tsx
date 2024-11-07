import React from 'react';
import image from '../../assets/images/jojo.jpg'
import { Trophy, Medal, Award } from 'lucide-react';

const participants = [
  {
    rank: 1,
    name: 'Équipe Innovation Plus',
    points: 2500,
    wins: 3,
    participations: 5,
    avatar: image,
  },
  // {
  //   rank: 2,
  //   name: 'TechStars',
  //   points: 2300,
  //   wins: 2,
  //   participations: 4,
  //   avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  // },
  // {
  //   rank: 3,
  //   name: 'Digital Pioneers',
  //   points: 2100,
  //   wins: 2,
  //   participations: 6,
  //   avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  // },
  // {
  //   rank: 4,
  //   name: 'Future Builders',
  //   points: 1900,
  //   wins: 1,
  //   participations: 3,
  //   avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  // },
  // {
  //   rank: 5,
  //   name: 'Code Masters',
  //   points: 1800,
  //   wins: 1,
  //   participations: 4,
  //   avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  // },
];

const Ranking = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Classement</h1>
        <p className="mt-3 text-xl text-gray-500">
          Découvrez les meilleurs participants et leurs performances.
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="flex justify-center items-end mb-16 space-x-8">
        {participants.slice(0, 3).map((participant, index) => {
          const height = index === 1 ? 'h-48' : index === 0 ? 'h-40' : 'h-32';
          const icon = index === 0 ? Trophy : index === 1 ? Medal : Award;
          const color = index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500';
          
          return (
            <div key={participant.rank} className="flex flex-col items-center">
              <img
                className="w-20 h-20 rounded-full mb-4"
                src={participant.avatar}
                alt={participant.name}
              />
              <div className="text-center mb-4">
                <p className="font-semibold text-gray-900">{participant.name}</p>
                <p className="text-gray-500">{participant.points} points</p>
              </div>
              <div className={`${height} w-32 ${color} rounded-t-lg relative`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  {React.createElement(icon, { className: 'w-8 h-8 text-white' })}
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-2xl">
                  #{participant.rank}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ranking Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rang
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Participant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Points
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Victoires
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Participations
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {participants.map((participant) => (
              <tr key={participant.rank} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">#{participant.rank}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={participant.avatar}
                        alt={participant.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{participant.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{participant.points}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{participant.wins}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{participant.participations}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comment sont calculés les points ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-600">Victoire : 1000 points</span>
          </div>
          <div className="flex items-center space-x-2">
            <Medal className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">2ème place : 500 points</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-orange-500" />
            <span className="text-gray-600">3ème place : 250 points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;