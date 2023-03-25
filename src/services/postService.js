import * as request from "./requester"

const baseUrl = 'http://localhost:3030/jsonstore/posts'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const posts = Object.values(result);

    return posts;
}