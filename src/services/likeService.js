import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/likes';
const request = requestFactory();

export const getAll = async (postId) => {
    const query = encodeURIComponent(`postId="${postId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const likes = Object.values(result);

    return likes;
};

export const like = async (postId, like) => {
    const result = await request.post(baseUrl, { postId, like });

    return result;
} 