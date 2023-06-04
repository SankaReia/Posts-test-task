import axios from "axios"

export const fetchPosts = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return data
}

// export const fetchComments = async (postId: string) => {
//     const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
//     return data
// }

export const fetchComments = async (postId: string) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return data
}