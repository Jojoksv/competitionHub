import { Sparkles, Target, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import image from '../../assets/images/image.png'

const features = [
    {
      name: 'Challenges Innovants',
      description: 'Participez à des concours stimulants et innovants dans divers domaines.',
      icon: Trophy,
    },
    {
      name: 'Communauté Active',
      description: 'Rejoignez une communauté dynamique de participants passionnés.',
      icon: Users,
    },
    {
      name: 'Objectifs Ambitieux',
      description: 'Relevez des défis qui vous permettront de vous surpasser.',
      icon: Target,
    },
    {
      name: 'Récompenses Attractives',
      description: 'Gagnez des prix exceptionnels et obtenez une reconnaissance méritée.',
      icon: Sparkles,
    },
  ];
  

function Home(){
    return(
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center pb-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Bienvenue sur</span>
              <span className="block text-indigo-600">OPPORTINUITÉS D'AFRIQUE</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              La plateforme de référence pour participer aux concours les plus innovants et stimulants.
              Relevez des défis, dépassez-vous et rejoignez une communauté passionnée.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="challenges"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Découvrir les challenges
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 rounded-xl"></div>
            <img
              className="relative rounded-xl shadow-2xl w-full h-96 object-cover"
              src={image}
              alt="Compétition"
            />
          </div>

          {/* Features Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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