import axios from "axios";

// Définir la configuration de base
const config = {
    Title: 'Competition-hub',
    // API devient dynamique en fonction de l'environnement
    API: process.env.REACT_APP_ENV === 'PROD' ? process.env.REACT_APP_API_URL : '/api', 
    authAPI: '/project'
};

// Définir les points d'API
const endPoints = {
    PostProject: '/postProject'
};

// Créer la fonction de soumission
export const submission = {
    Auth: {
        postProject: (data) => axios.post(config.API + config.authAPI + endPoints.PostProject, data).then(res => res.data)
    }
};
