import { ArrowRight, Calendar, Trophy, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const challenges = [
    {
      id: 1,
      title: 'Challenge Innovation Tech 2024',
      description: "Développez une solution innovante utilisant tech pour résoudre un problème social ou au sein de l'ESMT.",
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
    const navigate = useNavigate();

    return(
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-12">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Opportinutés</h1>
                <p className="mt-3 text-xl text-gray-500">
                    Découvrez tous les challenges à relever et améliorez vos compétences tech.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {challenges.map((challenge) => (
                    <div
                        key={challenge.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden scale-95 transform transition duration-300 hover:scale-100"
                    >
                        <div className="relative h-48">
                            <img
                                className="w-full h-full object-cover"
                                src={challenge.image}
                                alt={challenge.title}
                            />
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                challenge.status === 'En cours'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {challenge.status}
                                </span>
                            </div>
                        </div>

                        <div className="p-3">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                            <p className="text-gray-600 mb-3">{challenge.description}</p>

                            <div className="space-y-2">
                                <div className="flex items-center text-gray-500">
                                    <Calendar className="h-5 w-5 mr-2" />
                                    <span>Du {new Date(challenge.startDate).toLocaleDateString('fr-FR')} au {new Date(challenge.endDate).toLocaleDateString('fr-FR')}</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <Users className="h-5 w-5 mr-2" />
                                    <span>{challenge.participants} participants en {challenge.groupes} groupes</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <Trophy className="h-5 w-5 mr-2" />
                                    <span>Prix : {challenge.prize}</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button 
                                onClick={() => navigate('advices')}
                                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center">
                                    Proposez votre projet
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Challenges;