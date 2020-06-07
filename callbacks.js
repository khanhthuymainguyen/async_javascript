const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function getPosts () {
  setTimeout(() => {
    let output = ''; 
    posts.forEach((post, index) => {
      output += `<li>${post.title}, ${index}</li>`;
    });
    document.body.innerHTML = output; 
  }, 5000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    document.body.innerHTML = `Before callback ${posts}`;
    callback();
  }, 5000)
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

