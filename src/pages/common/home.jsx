import { ArrowRight, BadgeCheck, Briefcase, Calendar, Lightbulb, Network, Trophy, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { VscBriefcase } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import image from '../../assets/images/innov.avif';

const features = [
  {
    name: 'Offres Diversifiées',
    description: 'Accédez à des opportunités variées dans les secteurs clés en Afrique.',
    icon: Briefcase,
  },
  {
    name: 'Réseau de Contacts',
    description: 'Connectez-vous avec des professionnels et partenaires engagés sur le continent.',
    icon: Network,
  },
  {
    name: 'Projets Inspirants',
    description: 'Découvrez des projets innovants et transformateurs à travers toute l’Afrique.',
    icon: Lightbulb,
  },
  {
    name: 'Avantages Exclusifs',
    description: 'Profitez d’avantages uniques et faites avancer votre carrière ou entreprise.',
    icon: BadgeCheck,
  },
];

const jobData = [
  {
    id: 1,
    title: "CHARGE DE SUIVI, EVALUATION, REDEVABILITE ET APPRENTISSAGE (MEAL OFFICIER)",
    organization: "Fond des Nations Unies pour le Developpement",
    field: "Administration des Affaires - Gestion des Affaires, Gestion, Logistique",
    location: "ONU, Sénégal, Afrique de l'Ouest",
    deadline: "17 Novembre 2024",
    logo: logo,
  },
  {
    id: 2,
    title: "CHARGEE DE COMMUNICATION",
    organization: "Organisation des Nations Unies",
    field: "Communication, Journaliste",
    location: "ONU, Burkina FAso, Afrique de l'Ouest",
    deadline: "12 Decembre 2024",
    logo: logo,
  },
  {
    id: 3,
    title: "RESPONSABLE DES OPERATIONS",
    organization: "Banque Africaine de Développement",
    field: "Gestion des Opérations, Banque, Finances",
    location: "BAD, Côte d'Ivoire, Afrique de l'Ouest",
    deadline: "20 Décembre 2024",
    logo: logo,
  }
];

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
    link: '/opportinutes/advices'
  },
  {
    id: 2,
    title: 'Défi Santé et Bien-être 2024',
    description: "Proposez une solution qui améliore l'accès aux soins ou la qualité de vie des patients.",
    owner: 'Ministère de la Santé',
    country: 'Burkina Faso',
    city: 'Ouagadougou',
    endDate: '2024-12-15',
    image: 'https://fmrq.qc.ca/wp-content/uploads/2024/08/Medecins-discutent-securite-psychologique-iStock-1973842913-1024x683.jpg',
  },
  {
    id: 3,
    title: 'Concours Environnement Durable 2025',
    description: "Créez un projet qui promeut le développement durable et réduit l'empreinte carbone.",
    owner: 'Organisation Internationale pour l’Environnement',
    country: 'Burkina Faso',
    city: 'Bobo-Dioulasso',
    endDate: '2025-01-25',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 4,
    title: 'Hackathon de Sécurité Informatique 2025',
    description: "Résolvez des problèmes complexes liés à la cybersécurité et protégez les données sensibles.",
    owner: 'Institut National de Cybersécurité',
    country: 'Burkina Faso',
    city: 'Ouagadougou',
    endDate: '2025-02-07',
    image: 'https://medecine.umontreal.ca/wp-content/uploads/sites/68/2024/11/csm_20241104_sante-numerique-couverture_7b014c3235-768x512.jpg',
  },
];

console.log(import.meta.env.VITE_REACT_APP_ENV === 'PROD' ? import.meta.env.VITE_REACT_APP_API_URL : '/api');

function Home(){
    const navigate = useNavigate()
    return(
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center first-section">
            <div className="onBg">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-gray-100">Bienvenue sur</span>
                <span className="block text-indigo-500">OPPORTUNITÉS D'AFRIQUE</span>
              </h1>
              <p className="font-semibold mt-6 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                La plateforme incontournable pour saisir les meilleures opportunités d'Afrique. Explorez, connectez-vous et donnez vie à vos ambitions.
              </p>
              <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center sm:flex-col md:mt-8">
                <div className="flex justify-center">
                  <Link
                    to="opportinutes"
                    className="flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 button"
                  >
                    Découvrir 
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="w-full flex justify-center lg:text-5xl md:text-4xl text-3xl font-extrabold text-center">
                <span>Nos Objectifs</span>
              </div>
              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Opportinuties Section */}
          <div>
            <div>
              <div className="flex flex-col items-center gap-14 mb-14">
                <div className="w-full flex justify-center">
                  <h1 className="font-extrabold text-3xl text-center md:text-4xl lg:text-5xl">Nos dernières opportunités</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:px-0 md:px-4 px-4">
                  {jobData.map((job) => (
                    <div key={job.id} className="border border-gray-300 rounded-2xl px-3 py-4 flex gap-4 hover:border-orange-300">
                      <img src={job.logo} alt="logo" className="h-10 lg:h-12 md:h-12" />
                      <div className="flex flex-col gap-1">
                        <div>
                          <h1 className="font-semibold lg:text-lg md:text-lg leading-tight">{job.title}</h1>
                          <span className="font-medium text-gray-400 flex items-center gap-1 text-sm text-orange-500">{job.organization}</span>
                        </div>
                        <div className="flex flex-col gap-1 mt-3">
                          <span className="flex items-center gap-1 text-gray-600">
                            <VscBriefcase /> {job.field}
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <IoLocationOutline /> {job.location}
                          </span>
                        </div>
                        <div className="mt-3">
                          Date limite:<span className="font-bold"> {job.deadline}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to='#' className="py-3 px-6 rounded-lg text-white font-semibold bg-indigo-600">Voir toutes les offres</Link>
              </div>
            </div>
          </div>

          {/* Formations Section */}
          <div>
            <div>
              <div className="flex flex-col items-center gap-14 mb-14">
                <div className="w-full flex justify-center">
                  <h1 className="font-extrabold text-3xl text-center md:text-4xl lg:text-5xl">Formations et Concours</h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:px-0 md:px-4 px-4">
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
                          onClick={() => navigate(challenge.link)}
                          className='underline text-lg py-2 px-6 mb-4'>Postuler maintenant</button>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to='#' className="py-3 px-6 rounded-lg text-white font-semibold bg-indigo-600 ">Voir plus</Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-indigo-50 rounded-xl shadow-inner">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Prêt à vous propulser ?</span>
                <span className="block text-indigo-600">Rejoignez-nous dès aujourd'hui.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="opportinutes"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Commencer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
};
export default Home;