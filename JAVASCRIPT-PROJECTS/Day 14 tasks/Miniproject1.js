let startTime, sentence;

function normalize(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

function fetchSentence() {
  fetch('Miniproject1.html') 
    .then(res => res.json())
    .then(data => {
      sentence = data.content;
      document.getElementById('sentence').textContent = sentence;

      const input = document.getElementById('inputBox');
      input.value = '';
      input.disabled = false;
      input.focus();
      document.getElementById('result').textContent = '';
      startTime = null;let startTime, sentence;

      function normalize(str) {
        return str.trim().toLowerCase().replace(/\s+/g, ' ');
      }
      
      function fetchSentence() {
        fetch('https://api.quotable.io/random')
          .then(res => res.json())
          .then(data => {
            sentence = data.content;
            document.getElementById('sentence').textContent = sentence;
      
            const input = document.getElementById('inputBox');
            input.value = '';
            input.disabled = false;
            input.focus();
            document.getElementById('result').textContent = '';
            startTime = null;
      
            input.oninput = () => {
              if (!startTime) startTime = new Date();
      
              if (normalize(input.value) === normalize(sentence)) {
                const endTime = new Date();
                const timeTaken = (endTime - startTime) / 1000 / 60; // convert ms to minutes
                const wordCount = sentence.trim().split(/\s+/).length;
                const speed = Math.round(wordCount / timeTaken);
                document.getElementById('result').textContent = `Typing Speed: ${speed} WPM`;
                input.disabled = true;
              }
            };
          })
          .catch(err => {
            document.getElementById('sentence').textContent = 'Failed to load sentence.';
            console.error('Fetch error:', err);
          });
      }
      
      // Automatically load a sentence when the page loads
      window.onload = fetchSentence;
      

      input.oninput = () => {
        if (!startTime) startTime = new Date();

        if (normalize(input.value) === normalize(sentence)) {
          const endTime = new Date();
          const timeTaken = (endTime - startTime) / 1000 / 60; // minutes
          const wordCount = sentence.trim().split(/\s+/).length;
          const speed = Math.round(wordCount / timeTaken);
          document.getElementById('result').textContent = `Typing Speed: ${speed} WPM`;
          input.disabled = true;
        }
      };
    });
}
