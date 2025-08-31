async function getPosts() {
    const response = await fetch("https://raw.githubusercontent.com/Ritul-Void/while-true-blog/refs/heads/main/posts/posts.json")
    const allPosts = await response.json()
    return allPosts
}

async function displayPosts() {
    const posts = await getPosts()
    console.log(posts)

    console.log(posts[0].title)
    
}

displayPosts()


