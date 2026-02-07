import { useEffect, useState } from "react";
import { getRepos } from "../services/githubService";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getRepos();
                const featured = response.data.filter(repo => 
                    repo.topics && repo.topics.includes("portfolio")
                );
                setProjects(featured);
            } catch (error) {
                console.error("Erro ao carregar projetos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading };
};