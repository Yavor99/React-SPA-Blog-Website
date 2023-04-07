import { requestFactory }from "./requester"

const baseUrl = 'http://localhost:3030/data/posts';

export const postServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const posts = Object.values(result);

        return posts;
    };

    const getOne = async (postId) => {
        const result = await request.get(`${baseUrl}/${postId}`);
        return result;
        // const searchQuery = encodeURIComponent(`postId="${postId}"`);
        // const relationQuery = encodeURIComponent(`author=_ownerId:users`);

        // const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);

        // return result;
    };

    const create = async (postData) => {
        const result = await request.post(baseUrl, postData);

        return result;
    };

    const edit = (postId, data) => request.put(`${baseUrl}/${postId}`, data);

    const like = (postId, like) => request.put(`${baseUrl}/${postId}`, { likes: like})

    const deletePost = (postId) => request.delete(`${baseUrl}/${postId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        like,
        delete: deletePost
    };
};

