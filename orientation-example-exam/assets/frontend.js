// let btn = document.querySelector('#mybutton');
// btn.addEventListener('click', function() {
//     let text = document.createElement('p');
//     text.innerHTML = 'yo';
//     document.querySelector('body').appendChild(text);

//     btn.setAttribute('style', 'color : red');
// })

// btn.setAttribute('disabled')
// text.setAttribute('hidden', '');
// btn.setAttribute('class', 'newclass')
// btn.disabled = true; //WORKS

let form = document.querySelector("form");
let url = document.querySelector("#url");
let alias = document.querySelector('#alias');
form.addEventListener("submit", function() {
  event.preventDefault();

  sendBody = JSON.stringify({
    'url': url.value,
    'alias': alias.value
  });

  fetch("http://localhost:3000/api/links", { method: "POST", body: sendBody, headers : {'Content-Type' : 'application/json'}})
    .then(response => response.json())
    .then(row => {
      let text = document.createElement("p");
      text.innerHTML = `Your URL is aliased to ${row[0].alias} and your secret code is ${row[0].secretCode}`;
      document.querySelector("body").appendChild(text);
    });
    form.reset();
});
