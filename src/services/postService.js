import * as request from "./requester"

const baseUrl = 'http://localhost:3030/data/posts';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const posts = Object.values(result);

    return posts;
};

export const getOne = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`);

    return result;
};

export const create = async (postData, token) => {
    const result = await request.post(baseUrl, postData, token);

    return result;
};

export const edit = (postId, data, token) => request.put(`${baseUrl}/${postId}`, data, token);

export const deletePost = (postId, token) => request.del(`${baseUrl}/${postId}`, token);


