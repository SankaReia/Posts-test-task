import axios from "axios"

export const fetchPosts = async (limit = 10, page = 1) => {
    try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit: limit,
                _page: page
            }
        })
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