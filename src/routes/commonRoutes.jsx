import React from 'react';

const commonRoutes = [
    {
        index: true,
        element: React.lazy(() => import('../pages/common/home'))
    },
    {
        path: 'challenges',
        element: React.lazy(() => import('../pages/common/challenges'))
    },
    {
        path: 'about',
        element: React.lazy(() => import('../pages/common/about'))
    },
    {
        path: 'ranking',
        element: React.lazy(() => import('../pages/common/Ranking'))
    },
    {
        path: 'pastEditions',
        element: React.lazy(() => import('../pages/common/PastEditions'))
    },
    {
        path: 'howItWorks',
        element: React.lazy(() => import('../pages/common/HowItWorks'))
    },
    {
        path: 'challenges/advices',
        element: React.lazy(() => import('../pages/common/Advices'))
    }
];

export default commonRoutes;