import React from 'react';
import { Search, UserPlus, Award, Send } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Explorez les challenges',
    description: 'Parcourez notre sélection de concours et trouvez ceux qui correspondent à vos intérêts et compétences.',
  },
  {
    icon: UserPlus,
    title: 'Inscrivez-vous',
    description: "Créez votre compte et inscrivez-vous aux challenges qui vous intéressent. C'est simple et rapide !",
  },
  {
    icon: Send,
    title: 'Participez',
    description: 'Soumettez vos projets et solutions avant la date limite. Notre équipe est là pour vous accompagner.',
  },
  {
    icon: Award,
    title: 'Gagnez des prix',
    description: 'Les meilleurs projets sont récompensés ! Gagnez des prix et obtenez une reconnaissance méritée.',
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Comment ça marche ?</h1>
        <p className="mt-3 text-xl text-gray-500">
          Découvrez comment participer aux challenges en quelques étapes simples.
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
              {steps.map((step, stepIdx) => (
                <div
                  key={step.title}
                  className={`relative p-6 ${
                    stepIdx < steps.length - 1
                      ? 'sm:border-r sm:border-gray-200'
                      : ''
                  }`}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {step.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {step.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
        <dl className="space-y-6">
          {[
            {
              question: 'Qui peut participer aux challenges ?',
              answer:
                'Nos challenges sont ouverts à tous, que vous soyez étudiant, professionnel ou passionné. Certains challenges peuvent avoir des critères spécifiques qui seront clairement indiqués dans leur description.',
            },
            {
              question: 'Comment sont évalués les projets ?',
              answer:
                "Les projets sont évalués par un jury d'experts selon des critères spécifiques à chaque challenge. Ces critères peuvent inclure l'innovation, la faisabilité, l'impact potentiel et la qualité de la présentation.",
            },
            {
              question: 'Quels types de prix peut-on gagner ?',
              answer:
                'Les prix varient selon les challenges et peuvent inclure des récompenses financières, du mentorat, des opportunités professionnelles, ou encore de la visibilité auprès de nos partenaires.',
            },
            {
              question: 'Puis-je participer à plusieurs challenges en même temps ?',
              answer:
                'Oui, vous pouvez participer à autant de challenges que vous le souhaitez, tant que vous respectez les règles et les délais de chaque challenge.',
            },
          ].map((faq) => (
            <div key={faq.question} className="bg-white shadow rounded-lg p-6">
              <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-indigo-50 rounded-xl shadow-inner">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Vous avez d'autres questions ?</span>
            <span className="block text-indigo-600">Notre équipe est là pour vous aider.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;