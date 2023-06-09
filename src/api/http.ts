import axios from "axios"

export const fetchPosts = async ({limit = 10, page = 1  }) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            _limit: limit,
            _page: page
        }
    })
    return response
}

export const fetchComments = async (postId: string) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return data
}

export const fetchUserPosts = async (userId: string) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=` + userId)
    return data
}

export const fetchUser = async (userId: string) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/` + userId)
    return data
}