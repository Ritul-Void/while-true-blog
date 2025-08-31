async function getPosts() {
    const postResponse = await fetch("https://raw.githubusercontent.com/Ritul-Void/while-true-blog/refs/heads/main/posts/posts.json")
    const posts = await postResponse.json()
    console.log(posts)  
}

getPosts()