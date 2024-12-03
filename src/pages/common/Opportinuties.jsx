import { GoLocation } from 'react-icons/go';
import image from '../../assets/images/innov.avif'
import { useNavigate } from 'react-router-dom';

const challenges = [
    {
      id: 1,
      title: 'Challenge Innovation Tech 2024',
      description: "Développez une solution innovante utilisant tech pour résoudre un problème social ou au sein de l'ESMT.",
      owner: 'École Supérieure Multinationale des Télécommunications',
      country: 'Burkina Faso',
      city: 'Ouagadougou',
      endDate: '2024-11-30',
      image: image,
    }
  ];

function Challenges(){
    const navigate = useNavigate();
    return(
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-12">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Nos Opportinutés</h1>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 px-4">
                {challenges.map((challenge) => (
                    <div key={challenge.id} className="shadow-md">
                        <div className='bg-white flex flex-col items-center'>
                            <div className="bg-indigo-700 w-full flex justify-center">
                                <h1 className="flex items-center text-center h-16 text-white font-bold text-xl px-3">{challenge.owner}</h1>
                            </div>
                            <div className="py-4 px-6">
                                <div
                                    className="h-32 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${challenge.image})` }}
                                ></div>
                                <div className='grid grid-cols-2 gap-4 font-semibold text-gray-500 gap-1 text-md mt-1'>
                                    <span className='py-1.5 text-center flex items-center gap-1'><GoLocation />{challenge.city}</span>
                                    <span className='py-1.5 text-center flex items-center gap-1'><GoLocation />{challenge.country}</span>
                                </div>
                                <div className='flex flex-col gap-1 mt-1'>
                                    <h1 className='text-mg text-gray-500 font-bold'>{challenge.title}</h1>
                                    <span className='font-semibold text-xl'>{challenge.description}</span>
                                    <span className='font-semibold text-gray-500'>Date de fin: <b className='text-base'>{challenge.endDate}</b></span>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/opportinutes/advices')}
                                className='underline text-lg py-2 px-6 mb-4'
                            >Postuler maintenant</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Challenges;