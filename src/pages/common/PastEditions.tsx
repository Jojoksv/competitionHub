import React from 'react';
import { Trophy, Users, Calendar } from 'lucide-react';

const pastEditions = [
  {
    id: 1,
    year: '2023',
    title: 'Challenge Innovation Tech',
    winner: 'Équipe EcoSolutions',
    participants: 156,
    prize: '12 000 €',
    description: "Solution innovante de gestion des déchets urbains utilisant l'IoT.",
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    year: '2023',
    title: 'Hackathon IA & Santé',
    winner: 'Équipe HealthTech',
    participants: 89,
    prize: '8 000 €',
    description: "Application de diagnostic précoce utilisant l'intelligence artificielle.",
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 3,
    year: '2022',
    title: 'Défi Startup Green',
    winner: 'Équipe GreenMobile',
    participants: 134,
    prize: '10 000 €',
    description: "Application mobile pour réduire l'empreinte carbone au quotidien.",
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
];


// <div className="max-w-7xl mx-auto">
    //   <div className="text-center mb-12">
    //     <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Éditions passées</h1>
    //     <p className="mt-3 text-xl text-gray-500">
    //       Découvrez les projets gagnants des éditions précédentes et laissez-vous inspirer.
    //     </p>
    //   </div>

    //   <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    //     {/*Continuing with the PastEditions.tsx file content from where we left off:*/}

    //     {pastEditions.map((edition) => (
    //       <div
    //         key={edition.id}
    //         className="bg-white rounded-lg shadow-lg overflow-hidden"
    //       >
    //         <div className="relative h-48">
    //           <img
    //             className="w-full h-full object-cover"
    //             src={edition.image}
    //             alt={edition.title}
    //           />
    //           <div className="absolute top-4 right-4">
    //             <span className="px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800">
    //               {edition.year}
    //             </span>
    //           </div>
    //         </div>

    //         <div className="p-6">
    //           <h3 className="text-xl font-semibold text-gray-900 mb-2">{edition.title}</h3>
    //           <p className="text-gray-600 mb-4">{edition.description}</p>

    //           <div className="space-y-3">
    //             <div className="flex items-center text-gray-500">
    //               <Trophy className="h-5 w-5 mr-2" />
    //               <span>Gagnant : {edition.winner}</span>
    //             </div>
    //             <div className="flex items-center text-gray-500">
    //               <Users className="h-5 w-5 mr-2" />
    //               <span>{edition.participants} participants</span>
    //             </div>
    //             <div className="flex items-center text-gray-500">
    //               <Calendar className="h-5 w-5 mr-2" />
    //               <span>Prix : {edition.prize}</span>
    //             </div>
    //           </div>

    //           <div className="mt-6">
    //             <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
    //               Voir les détails
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Statistics */}
    //   <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
    //     <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
    //       <div className="text-center">
    //         <span className="text-4xl font-bold text-indigo-600">15+</span>
    //         <p className="mt-2 text-lg text-gray-600">Éditions organisées</p>
    //       </div>
    //       <div className="text-center">
    //         <span className="text-4xl font-bold text-indigo-600">1500+</span>
    //         <p className="mt-2 text-lg text-gray-600">Participants</p>
    //       </div>
    //       <div className="text-center">
    //         <span className="text-4xl font-bold text-indigo-600">250K €</span>
    //         <p className="mt-2 text-lg text-gray-600">Prix distribués</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Timeline */}
    //   <div className="mt-16">
    //     <h2 className="text-2xl font-bold text-gray-900 mb-8">Notre histoire en dates</h2>
    //     <div className="relative">
    //       <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
    //       <div className="space-y-12">
    //         {[
    //           {
    //             year: '2023',
    //             title: 'Une année record',
    //             description: 'Plus de 500 participants et 100K € de prix distribués',
    //           },
    //           {
    //             year: '2022',
    //             title: 'Expansion internationale',
    //             description: 'Ouverture des challenges aux participants internationaux',
    //           },
    //           {
    //             year: '2021',
    //             title: 'Premiers pas',
    //             description: 'Lancement de la plateforme avec 3 challenges majeurs',
    //           },
    //         ].map((event, index) => (
    //           <div key={event.year} className="relative">
    //             <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
    //               <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
    //                 <span className="text-white text-sm font-semibold">{event.year}</span>
    //               </div>
    //             </div>
    //             <div className={`relative ${
    //               index % 2 === 0 ? 'ml-1/2 pl-8' : 'mr-1/2 pr-8 text-right'
    //             }`}>
    //               <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
    //               <p className="mt-2 text-gray-600">{event.description}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    

const PastEditions = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Éditions passées</h1>
        <p className="mt-3 text-xl text-gray-500">
          Découvrez les projets gagnants des éditions précédentes et laissez-vous inspirer.
        </p>
      </div>
      <div className='bg-white h-48 flex items-center justify-center rounded-lg font-bold text-xl'>
        Éditions passées non disponibles 
      </div>
    </div>
  );
};

export default PastEditions;