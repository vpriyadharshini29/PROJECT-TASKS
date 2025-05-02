let startTime, sentence;

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

        if (input.value === sentence) {
          const endTime = new Date();
          const timeTaken = (endTime - startTime) / 1000 / 60; 
          const wordCount = sentence.trim().split(/\s+/).length;
          const speed = Math.round(wordCount / timeTaken);
          document.getElementById('result').textContent = `Typing Speed: ${speed} WPM`;
          input.disabled = true;
        }
      };
    });
}
