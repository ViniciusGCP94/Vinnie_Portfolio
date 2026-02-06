import axios from 'axios'

const githubService = axios.create({
baseURL: 'https://api.github.com',
timeout: 5000,
headers: {'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'}
})

    export async function getRepos(){
        try {
            const response = await githubService.get('/users/ViniciusGCP94/repos');
            return response;
        } catch (error) {
            console.error("Erro ao buscar repositórios:", error)
            throw error
        }
    }

    export async function getRepoLanguages(repoName){
        try {
            const response = await githubService.get(`/repos/ViniciusGCP94/${repoName}/languages`)
            return response;
        } catch (error) {
            console.error(`Erro ao buscar linguagens do repositório ${repoName}:`, error)
            return {data: {} };
        }
    }

export default githubService