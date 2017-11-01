const api = process.env.REACT_APP_PROJECT_READABLE_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET ALL POST
export const getPosts = () => {
    fetch(`${api}/posts`, {headers})
    .then(
        res => res.json(),
        error => console.log("Error getting posts!", error)
    )
}

// GET ALL CATEGORIES
export const getCategories = () => {
    fetch(`${api}/categories`, {headers})
    .then(
        res => res.json(),
        error => console.log("Error getting categories!", error)
    )
}

// GET ALL COMMENTS FROM POST
export const getComments = (postId) => {
    fetch(`${api}/posts/` + postId + `/comments`, {headers})
    .then(
        res => res.json(),
        error => console.log("Error getting comments!", error)
    )
}

// INSERT POST
export const insertPost = (obj) => {
    fetch(`${api}/posts`,{
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ojb)
    })
    .then(
        res => res.json(),
        error => console.log("Error inserting post!", error)
    )
}

// INSERT COMMENT
export const insertComment = (obj) => {
    fetch(`${api}/comments`, {
        method: 'POST',
        headers : {
            ...headers,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(
        res => res.json(),
        error => console.log("Error inserting comment!",error)
    )
}

// VOTE ON A POST
export const scorePost = (postId,score) => {
    fetch(`${api}/post/` + postId, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(score)
    })
    .then(
        res => res.json(),
        error => console.log("Error update score post", error)
    )
}

// VOTE FOR A COMMENT
export const scoreComment = (commentId,score) =>{
    fetch(`${api}/comments/` + commentId, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(score)
    })
    .then(
        res => res.json(),
        error => console.log("Error update score comment", error)
    )
}

// UPATE POST
export const updatePost = (postId, newPost) => {
    fetch(`${api}/posts/` + postId,{
        method: 'PUT',
        headers:{
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(
        res => res.json(),
        error => console.log("Error updating posts", error)
    )
}

// UPDATE COMMENT
export const updateComment = (commentId, newComment) => {
    fetch(`${api}/comments` + commentId, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    })
    .then(
        res => res.json(),
        error => console.log("Error updating comment", error)
    )
}

// DELETE POST
export const deletePost = (postId) => {
    fetch(`${api}/posts/` + postId, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postId)
    })
    .then(
        res => res.json(),
        error => console.log("Error deleting post", error)
    )
}

// DELETE COMMENT
export const deleteComment = (commentId) => {
    fetch(`${api}/comments/`+commentId,{
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentId)
    })
    .then(
        res => res.json(),
        error => console.log("Error deleting comment", error)
    )
}

// GET SINGLE POST
export const getSinglePost = (postId) => {
    fetch(`${api}/posts/` + postId, {
        headers
    }),
    res => res.json(),
    error => console.log("Error getting single post", error)
}

// GET SINGLE COMMENT
export const getSingleComment = (commentId) => {
    fetch(`${api}/comments/` + commentId, {
        headers
    }),
    res => res.json(),
    error => console.log("Error getting single comment", error)
}

// GET POST FROM CATEGORY
export const getPostsFromCategory = (category) => {
    fetch(`${api}/` + category + `/posts`, {
        headers
    }),
    res => res.json(),
    error => console.log("Error getting single comment", error)
}
