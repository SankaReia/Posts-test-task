import axios from "axios"

export const fetchPosts = async () => {
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return data
    } catch (error) {
        console.log(error)
    }
}

// export const fetchComments = async (postId: string) => {
//     const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
//     return data
// }

export const fetchComments = async (postId: string) => {
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        return data
        
    } catch (error) {
        console.log(error)
    }
}