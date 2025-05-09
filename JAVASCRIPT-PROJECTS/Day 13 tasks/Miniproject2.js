async function searchMovie() {
    const title = document.getElementById('movieInput').value.trim();
    const movieInfo = document.getElementById('movieInfo');
  
    if (!title) {
      movieInfo.innerHTML = "<p>Please enter a movie title.</p>";
      return;
    }
  
    const apiKey = 'abcd123'; 
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      if (data.Response === "False") {
        movieInfo.innerHTML = `<p>Movie not found: "${title}"</p>`;
      } else {
        movieInfo.innerHTML = `
          <h2>${data.Title} (${data.Year})</h2>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/200x300?text=No+Image"}" alt="Poster">
        `;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      movieInfo.innerHTML = `<p>Error fetching movie data.</p>`;
    }
  }
  