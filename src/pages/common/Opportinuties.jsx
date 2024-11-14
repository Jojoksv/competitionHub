import { ArrowRight, Calendar, Trophy, Users } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";

const challenges = [
    {
      id: 1,
      title: 'Challenge Innovation Tech 2024',
      description: "Développez une solution innovante utilisant tech pour résoudre un problème social ou au sein de l'ESMT.",
      owner: 'École Supérieure Multinationale des Télécommunications',
      country: 'Burkina Faso',
      city: 'Ouagadougou',
      startDate: '2024-11-15',
      endDate: '2024-11-15',
      participants: 0,
      groupes: 0,
      prize: '0 FCA',
      status: 'Bientôt',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    }
  ];

function Challenges(){
    return(
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-12">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Nos Opportinutés</h1>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 px-10">
                {challenges.map((challenge) => (
                    <div
                        key={challenge.id}
                        className="flex flex-col items-center bg-blue-100 py-6 px-4 shadow-md"
                    >
                        <div className="w-full flex flex-col items-center">
                            <img src={challenge.image} alt="ESMT Project" className="w-20 h-20 rounded-lg" />
                            <h1 className="font-semibold mt-2 text-lg">{challenge.title}</h1>
                            <span className="font-semibold text-gray-500 text-center">{challenge.description}</span>
                        </div>
                        <div className="flex flex-wrap mt-4 gap-2 text-gray-500 font-semibold">
                            <span className="border border-gray-400 text-center rounded-3xl py-1 px-4 m-auto">{challenge.owner}</span>
                            <span className="border border-gray-400 text-center rounded-3xl py-1 px-4 m-auto flex items-center gap-1"><IoLocationOutline />{challenge.country}</span>
                            <span className="border border-gray-400 text-center rounded-3xl py-1 px-4 m-auto flex items-center gap-1"><IoLocationOutline />{challenge.city}</span>
                            <span className="border border-gray-400 text-center rounded-3xl py-1 px-4 m-auto">Date début: {challenge.startDate}</span>
                            <span className="border border-gray-400 text-center rounded-3xl py-1 px-4 m-auto">Date fin: {challenge.endDate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Challenges;