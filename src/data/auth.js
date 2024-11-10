import { useMutation } from "react-query";
import { submission } from "../lib/constants";

export const useSendProject = () => {
    const postProjectMutation = useMutation(data => submission.Auth.postProject(data));
    return {
        postProject: postProjectMutation.mutate
    };
};