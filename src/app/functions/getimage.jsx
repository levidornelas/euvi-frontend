  // Função para escolher a imagem com base no tipo de mídia
export const getImageForMediaType = (mediaType) => {
  switch (mediaType) {
    case 'Filme':
      return require('../../../assets/film.png'); // Imagem para filme
    default:
      return null; 
  }
};