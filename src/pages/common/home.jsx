import { ArrowRight, BadgeCheck, Briefcase, Calendar, Lightbulb, Network, Trophy, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { VscBriefcase } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";

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
    startDate: '2024-11-15',
    endDate: '2024-11-15',
    participants: 0,
    groupes: 0,
    prize: '0 FCA',
    status: 'Bientôt',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
  // {
  //   id: 2,
  //   title: 'Défi Santé et Bien-être 2024',
  //   description: "Proposez une solution qui améliore l'accès aux soins ou la qualité de vie des patients.",
  //   startDate: '2024-12-01',
  //   endDate: '2024-12-15',
  //   participants: 10,
  //   groupes: 5,
  //   prize: '500,000 FCA',
  //   status: 'Ouvert',
  //   image: 'https://fmrq.qc.ca/wp-content/uploads/2024/08/Medecins-discutent-securite-psychologique-iStock-1973842913-1024x683.jpg',
  // },
  // {
  //   id: 3,
  //   title: 'Concours Environnement Durable 2025',
  //   description: "Créez un projet qui promeut le développement durable et réduit l'empreinte carbone.",
  //   startDate: '2025-01-10',
  //   endDate: '2025-01-25',
  //   participants: 25,
  //   groupes: 8,
  //   prize: '1,000,000 FCA',
  //   status: 'À venir',
  //   image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  // },
  // {
  //   id: 4,
  //   title: 'Hackathon de Sécurité Informatique 2025',
  //   description: "Résolvez des problèmes complexes liés à la cybersécurité et protégez les données sensibles.",
  //   startDate: '2025-02-05',
  //   endDate: '2025-02-07',
  //   participants: 40,
  //   groupes: 10,
  //   prize: '750,000 FCA',
  //   status: 'Bientôt',
  //   image: 'https://medecine.umontreal.ca/wp-content/uploads/sites/68/2024/11/csm_20241104_sante-numerique-couverture_7b014c3235-768x512.jpg',
  // }
];

function Home(){
    const navigate = useNavigate()
    return(
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center first-section">
            <div className="onBg">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-gray-100">Bienvenue sur</span>
                <span className="block text-indigo-600">OPPORTINUITÉS D'AFRIQUE</span>
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
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 lg:px-0 md:px-4 px-4">
                  {challenges.map((challenge) => (
                    <div
                        key={challenge.id}
                        className="flex bg-gray-200 p-2 border"
                    >
                        <div className="relative w-2/5">
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
                        <div className="pl-3 w-3/5">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{challenge.title}</h3>
                            <p className="text-gray-600 mb-1 font-semibold">{challenge.description}</p>
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-500">
                                    <Calendar className="h-5 w-5 mr-2" />
                                    <span>Date limmite de proposition de projet: 25 Novembre 2024</span>
                                    {/* <span>Du {new Date(challenge.startDate).toLocaleDateString('fr-FR')} au {new Date(challenge.endDate).toLocaleDateString('fr-FR')}</span> */}
                                </div>
                                <div className="flex items-center text-gray-500">
                                    {/* <Users className="h-5 w-5 mr-2" /> */}
                                    {/* <span>{challenge.participants} participants en {challenge.groupes} groupes</span> */}
                                </div>
                                <div className="flex items-center text-gray-500">
                                    {/* <Trophy className="h-5 w-5 mr-2" /> */}
                                    {/* <span>Prix : {challenge.prize}</span> */}
                                </div>
                                <div className="text-blue-500 font-semibold">
                                  École Supérieure Multinationale des Télécommunications
                                </div>
                            </div>
                            <div className="mt-3">
                                <button
                                onClick={() => navigate('/opportinutes/advices')}
                                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center md:text-md sm:text-md text-sm font-semibold">
                                    Proposez votre projet
                                </button>
                            </div>
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
}
export default Home;