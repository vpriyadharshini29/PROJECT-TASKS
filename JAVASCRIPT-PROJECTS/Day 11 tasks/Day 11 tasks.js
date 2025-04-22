  // JS132
  function saveUsername() {
    const user = document.getElementById('usernameInput').value;
    localStorage.setItem('username', user);
    document.getElementById('savedUsername').textContent = 'Saved: ' + user;
  }
  document.getElementById('savedUsername').textContent = 'Saved: ' + (localStorage.getItem('username') || '');

  // JS133
  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  const theme = localStorage.getItem('theme');
  if (theme) document.body.classList.add(theme);

  // JS134
  function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartDisplay').textContent = 'Cart: ' + cart.join(', ');
  }
  displayCart();

  // JS135
  function login() {
    sessionStorage.setItem('loggedIn', 'true');
    document.getElementById('loginStatus').textContent = 'You are logged in.';
  }
  if (sessionStorage.getItem('loggedIn')) {
    document.getElementById('loginStatus').textContent = 'You are logged in.';
  }

  // JS136
  const formInput = document.getElementById('formInput');
  formInput.value = sessionStorage.getItem('formValue') || '';
  formInput.addEventListener('input', () => {
    sessionStorage.setItem('formValue', formInput.value);
  });

  // JS137
  const lastPage = localStorage.getItem('lastPage');
  document.getElementById('lastPage').textContent = 'Last visited: ' + (lastPage || 'First time!');
  localStorage.setItem('lastPage', location.href);

  // JS138
  let clicks = parseInt(localStorage.getItem('clicks')) || 0;
  document.getElementById('clickCount').textContent = clicks;
  document.getElementById('clickBtn').addEventListener('click', () => {
    clicks++;
    localStorage.setItem('clicks', clicks);
    document.getElementById('clickCount').textContent = clicks;
  });

  // JS139
  function addTodo() {
    const input = document.getElementById('todoInput').value;
    if (!input) return;
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(input);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
  }
  function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach((todo, i) => {
      const li = document.createElement('li');
      li.textContent = todo;
      list.appendChild(li);
    });
  }
  renderTodos();

  // JS140–141
  function storeObject() {
    const user = { name: "Alice", age: 30 };
    localStorage.setItem('userObj', JSON.stringify(user));
  }
  function retrieveObject() {
    const user = JSON.parse(localStorage.getItem('userObj'));
    document.getElementById('userObjectDisplay').textContent = user ? `Name: ${user.name}, Age: ${user.age}` : 'No data found';
  }

  // JS142
  function saveSurvey() {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (answer) sessionStorage.setItem('surveyQ1', answer.value);
  }

  // JS143
  let visits = parseInt(localStorage.getItem('visits')) || 0;
  visits++;
  localStorage.setItem('visits', visits);
  document.getElementById('visitCount').textContent = 'Page Visits: ' + visits;

  // JS144
  document.querySelectorAll('input[name="quiz"]').forEach(input => {
    input.addEventListener('change', () => {
      sessionStorage.setItem('quizAnswer', input.value);
    });
  });
  const savedQuiz = sessionStorage.getItem('quizAnswer');
  if (savedQuiz) {
    const selected = document.querySelector(`input[name="quiz"][value="${savedQuiz}"]`);
    if (selected) selected.checked = true;
  }