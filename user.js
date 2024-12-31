const postHTMLEl = document.querySelector(".post-list")
const id = localStorage.getItem('id')


function onSearchChange(event) {
    // console.log(event)
    const id = event.target.value
    // console.log(id)
    renderPosts(id)
}



async function renderPosts(userId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`)
    const postsData = await posts.json()
    // console.log(postsData)
    postHTMLEl.innerHTML = postsData.map((post) => postHTML(post)).join('')
    
}

function postHTML(post) {
    return `<div class="post-list">
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
  </div>`
}

renderPosts(id)