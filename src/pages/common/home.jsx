import { BadgeCheck, Briefcase, Lightbulb, Network } from "lucide-react";
import { Link } from "react-router-dom";

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
  

function Home(){
    return(
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center first-section">
            <div className="onBg">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-gray-900">Bienvenue sur</span>
                <span className="block text-indigo-600">OPPORTINUITÉS D'AFRIQUE</span>
              </h1>
              <p className="font-semibold mt-6 max-w-md mx-auto text-base text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                La plateforme incontournable pour saisir les meilleures opportunités d'Afrique. Explorez, connectez-vous et donnez vie à vos ambitions.
              </p>
              <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center sm:flex-col md:mt-8">
                <div className="flex justify-center">
                  <Link
                    to="challenges"
                    className="l flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
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

          {/* CTA Section */}
          <div className="bg-indigo-50 rounded-xl shadow-inner">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Prêt à relever le défi ?</span>
                <span className="block text-indigo-600">Rejoignez-nous dès aujourd'hui.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="challenges"
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