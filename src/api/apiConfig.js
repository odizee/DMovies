const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8f4e0db62d18829e19e55973bca49759',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;