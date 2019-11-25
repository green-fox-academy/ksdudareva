'use strict';

// const request = new XMLHttpRequest(); // when using fetch - no need to use xmlhttprequest

fetch('http://localhost:8080/posts' , {method: 'GET'})
.then((response) => response.json())
.then((data)  => {
  console.log(data);
  data.posts.forEach(post => createPost(post));
})
.catch((error) => console.log(error));

let submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
  fetch('http://localhost:8080/posts', { method: 'POST' })
    .then((response) => response.json())
    .then((data) => createPost(data.posts))
    .catch((error) => console.log(error))
}); 


function createPost(object){
    let postBox = document.createElement("div");
    postBox.setAttribute('class','postbox')
    let scoring = document.createElement("div");
    scoring.setAttribute('class','scoring')
    let upArrow = document.createElement("div");
    upArrow.setAttribute('class','up-Arrow');
    upArrow.innerHTML = '<a><button></button></a>';
    let score = document.createElement("div");
    score.setAttribute('class' , 'score')
    score.innerHTML = `<h3>${object.score}</h3>`
    let downArrow = document.createElement("div");
    downArrow.setAttribute('class','down-Arrow');
    downArrow.innerHTML = '<a><button></button></a>';
  
    let post = document.createElement("div");
    post.setAttribute('class','post');
    let title = document.createElement("div");
    title.setAttribute('class','title');
    title.innerHTML = `<h2>${object.title}</h2>`;
    let text = document.createElement("div");
    text.setAttribute('class','text');
    text.innerHTML = `<h3>${object.url}</h3>`;
  
    document.querySelector('main').appendChild(postBox);
    postBox.appendChild(scoring);
    scoring.appendChild(upArrow);
    scoring.appendChild(score);
    scoring.appendChild(downArrow);
    postBox.appendChild(post);
    post.appendChild(title);
    post.appendChild(text);
  
  }