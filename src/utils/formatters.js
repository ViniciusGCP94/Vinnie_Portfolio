export const formatRepoTitle = (repoName) => {
    return repoName
        .toLowerCase()
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
};



export const getProjectImageUrl = (repoName) => {
    return `https://raw.githubusercontent.com/ViniciusGCP94/${repoName}/main/capa.png`;
};

export const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x225?text=Sem+Capa';