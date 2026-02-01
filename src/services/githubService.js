import axios from 'axios'
import React from 'react'

const githubService = axios.create({
baseURL: 'https://api.github.com',
timeout: 5000,
headers: {'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'}
})

    export async function getRepos(){
        try {
            return await githubService.get('/users/ViniciusGCP94/repos')
        } catch (error) {
            console.error("Erro ao buscar repositórios:", error)
            throw error
        }
    }

export default githubService