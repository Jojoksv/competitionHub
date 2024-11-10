import axios from "axios";

const config = {
    Title: 'Competition-hub',
    API: '/api',
    authAPI: '/project'
};

const endPoints = {
    PostProject: '/postProject'
}

export const submission = {
    Auth: {
        postProject: (data) => axios.post(config.API + config.authAPI + endPoints.PostProject, data ).then(res => res.data)
    }
}