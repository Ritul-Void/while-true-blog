const allPostGrid = document.querySelector('#postGrid')

async function getPosts() {
    const response = await fetch("https://raw.githubusercontent.com/Ritul-Void/while-true-blog/refs/heads/main/posts/posts.json")
    const allPosts = await response.json()
    return allPosts
}
  

async function displayPosts() {
   const posts = await getPosts()
    console.log(posts)
    const totalPosts = posts.length
    console.log(`total posts = ${totalPosts}`)
    console.log(posts[0].title)
    
    for(i=0;i<totalPosts;i++){

        //postcard
        const newPostCard = document.createElement('div');
        newPostCard.classList.add('post-card');
        allPostGrid.appendChild(newPostCard)
        
        //tags bar on the post

         const postTags = document.createElement('div')
        postTags.classList.add('post-tags')
        newPostCard.appendChild(postTags);

         const totalTags = posts[i].tags
         const tagLength = totalTags.length

    //individual tags

         for(a=0;a<tagLength;a++){
            const tag = document.createElement('span')
            tag.classList.add('tag')
            tag.textContent = totalTags[a]
            postTags.appendChild(tag)
         }
        

        

       
        
        //title on the post
        const postTitle = document.createElement('div')
        postTitle.classList.add('post-title')
        postTitle.textContent =  posts[i].title
        newPostCard.appendChild(postTitle);
        
        //meta info about posts 
        const postMeta = document.createElement('div')
        postMeta.classList.add('post-meta')
        newPostCard.appendChild(postMeta)

        const postDate = document.createElement('div')
        postDate.classList.add("post-date")
        postDate.textContent = posts[i].created_at
        postMeta.appendChild(postDate)

        const postReadTime = document.createElement('div')
        postReadTime.classList.add("post-read-time")
        postReadTime.textContent = posts[i].time
        postMeta.appendChild(postDate)




    }
   
    
}

displayPosts()


