const api = process.env.REACT_APP_PROJECT_READABLE_API_URL || 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET ALL POST
export const getPosts = () =>
fetch(`${api}/posts`, { headers })
    .then(
        res => res.json(),
        error => console.log('An error occurred', error)
    )

// GET ALL CATEGORIES
export const getCategories = () =>
fetch(`${api}/categories`, { headers })
    .then(
        res => res.json(),
        error => console.log('An error occurred', error)
    )

export const getPost = (postId) =>
fetch(`${api}/posts/` + postId, {headers})
    .then(
        res => res.json(),
        error => console.log('An error ocurred', error)
    )


// GET ALL COMMENTS FROM POST
export const getComments = (postId) => 
fetch(`${api}/posts/` + postId + `/comments`, {headers})
    .then(
    res => res.json(),
    error => console.log("Error getting comments!", error)
)
// INSERT COMMENT
export const insertComment = (obj) => 
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

// GET POST FROM CATEGORY
export const getPostsFromCategory = (category) => 
    fetch(`${api}/` + category + `/posts`, {
        headers
    })
    .then(
    res => res.json(),
    error => console.log("Error getting single comment", error)
    )

// INSERT POST
export const insertPost = (obj) => 
    fetch(`${api}/posts`,{
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(
        res => res.json(),
        error => console.log("Error inserting post!", error)
    )

    // VOTE FOR A COMMENT
export const scoreComment = (commentId,option) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option})
    })
    .then(
        res => res.json(),
        error => console.log("Error update score comment", error)
    )
    .then(
        console.log({option})
    )



    // VOTE ON A POST
export const scorePost = (postId,option) => 
    fetch(`${api}/posts/` + postId, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option})
    })
    .then(
        res => res.json(),
        error => console.log("Error update score post", error)
    ).then(
        console.log({option})
    )

// DELETE COMMENT
export const deleteComment = (commentId) => 
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

// UPDATE COMMENT
export const updateComment = (commentId, newComment) => 
    fetch(`${api}/comments/` + commentId, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    })
    .then(
        res => res.json(),
        error => console.log("Error deleting comment", error)
    )

    // DELETE POST
export const deletePost = (postId) => 
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

// UPDATE POST
export const updatePost = (postId, newPost) => 
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