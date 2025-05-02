// 1. Random Joke
function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        document.getElementById('jokeOutput').textContent = `${data.setup} - ${data.punchline}`;
      });
  }
  
  // 2. Fetch Posts
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res => res.json())
    .then(posts => {
      const ul = document.getElementById('postList');
      posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        ul.appendChild(li);
      });
    });
  
  // 3. Submit Form
  document.getElementById('postForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    document.getElementById('formResult').textContent = `Submitted! Post ID: ${result.id}`;
  });
  
  // 4. Weather (Requires your OpenWeatherMap API key)
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=7bdfdda22b3432494ade4290d19e9ae0&units=metric')
    .then(res => res.json())
    .then(data => {
      document.getElementById('weatherOutput').textContent = `London: ${data.main.temp}°C`;
    });
  
  // 5. GitHub Profile
  function getGitHubUser() {
    fetch('https://api.github.com/users/octocat')
      .then(res => res.json())
      .then(user => {
        document.getElementById('githubProfile').innerHTML = `
          <img src="${user.avatar_url}" alt="Avatar">
          <p>${user.name} (@${user.login})</p>
        `;
      });
  }
  
  // 6. Image Gallery
  fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
    .then(res => res.json())
    .then(images => {
      const div = document.getElementById('gallery');
      images.forEach(img => {
        div.innerHTML += `<img src="${img.thumbnailUrl}" alt="${img.title}"> `;
      });
    });
  
  // 7. Pagination
  let page = 1;
  function loadPage() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`)
      .then(res => res.json())
      .then(posts => {
        const div = document.getElementById('paginatedPosts');
        posts.forEach(post => {
          div.innerHTML += `<p>${post.title}</p>`;
        });
        page++;
      });
  }
  
  // 8. AJAX Comments
  function loadComments() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments?_limit=5');
    xhr.onload = function () {
      const comments = JSON.parse(this.responseText);
      const div = document.getElementById('comments');
      comments.forEach(c => {
        div.innerHTML += `<p><strong>${c.name}</strong>: ${c.body}</p>`;
      });
    };
    xhr.send();
  }
  
  // 9. Currency Exchange
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(res => res.json())
    .then(data => {
      document.getElementById('exchangeRate').textContent = `1 USD = ${data.rates.EUR} EUR`;
    });
  
  // 10. Load Data on Button Click
  function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(user => {
        document.getElementById('userOutput').textContent = user.name;
      });
  }
  
  // 11. Handle Error
  function handleError() {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .catch(err => {
        document.getElementById('errorOutput').textContent = `Error: ${err.message}`;
      });
  }
  
  // 12. Search Posts
  document.getElementById('searchBox').addEventListener('input', async function () {
    const query = this.value.toLowerCase();
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const results = posts.filter(p => p.title.toLowerCase().includes(query));
    document.getElementById('searchResults').innerHTML =
      results.map(p => `<p>${p.title}</p>`).join('');
  });
  