import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/post?id=eq.${id}`);

        if (data && data.length > 0) {
            // Se encontrar o post, retorna o primeiro elemento do array (supondo que seja único)
            return data[0];
        } else {
            // Se não encontrar nenhum post, pode retornar um objeto vazio ou lançar uma exceção, dependendo do seu requisito.
            return {};
        }
    } catch (error) {
        console.error('Erro ao buscar o post por ID:', error);
        throw error; // Você pode escolher tratar o erro de outra forma, dependendo do seu caso de uso.
    }
}