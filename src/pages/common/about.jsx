import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">À propos de CompetitionHub</h1>
        <p className="mt-3 text-xl text-gray-500">
          Découvrez notre mission et notre engagement envers l'innovation et l'excellence.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 rounded-xl"></div>
        <img
          className="relative rounded-xl shadow-2xl w-full h-96 object-cover mb-12"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Notre mission"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {[
          {
            icon: Shield,
            title: 'Notre Mission',
            description: "Promouvoir l'innovation et l'excellence à travers des défis stimulants.",
          },
          {
            icon: Users,
            title: 'Notre Communauté',
            description: 'Une communauté dynamique  et passionnés.',
          },
          {
            icon: Target,
            title: 'Nos Objectifs',
            description: 'Inspirer et encourager le développement de solutions innovantes.',
          },
          {
            icon: Award,
            title: 'Nos Valeurs',
            description: 'Excellence, innovation, collaboration et intégrité.',
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
        <p className="text-gray-600 mb-6">
          Fondée en 2024, CompetitionHub est née de la volonté de créer une plateforme innovante
          permettant aux talents de s'exprimer et de se développer à travers des défis stimulants.
          Depuis notre création, nous avons organisé de nombreux concours, réuni plus de multiples
          participants passionnés et distribué de nombreux prix.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
        <p className="text-gray-600 mb-6">
          Notre équipe est composée d'experts passionnés par l'innovation et le développement de
          talents. Nous travaillons chaque jour pour créer les meilleures opportunités de
          développement et d'apprentissage pour notre communauté.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
        <p className="text-gray-600">
          Nous collaborons avec les plus grandes entreprises et institutions pour offrir des
          opportunités uniques à notre communauté. Nos partenaires partagent notre vision et
          notre engagement envers l'excellence et l'innovation.
        </p>
      </div>
    </div>
  );
};

export default About;