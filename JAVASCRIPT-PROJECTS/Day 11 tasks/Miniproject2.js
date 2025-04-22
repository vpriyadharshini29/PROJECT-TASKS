// A simple note-taking app that allows users to add, delete, and save notes persistently.
// Features:
// ✔ Add Notes: Users can write and save notes.
// ✔ Persist Data: Notes are stored in LocalStorage and remain after page reload.
// ✔ Delete Notes: Users can remove notes individually.
function loadNotes() {
    return JSON.parse(localStorage.getItem('notes')) || [];
  }
  
  function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  
  function addNote() {
    const input = document.getElementById('noteInput');
    const text = input.value.trim();
    if (!text) return;
    const notes = loadNotes();
    notes.push(text);
    saveNotes(notes);
    input.value = '';
    displayNotes();
  }
  
  function deleteNote(index) {
    const notes = loadNotes();
    notes.splice(index, 1);
    saveNotes(notes);
    displayNotes();
  }
  
  function displayNotes() {
    const notes = loadNotes();
    const container = document.getElementById('notes');
    container.innerHTML = '';
    notes.forEach((note, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>${note}</p>
        <button onclick="deleteNote(${index})">Delete</button>
      `;
      container.appendChild(div);
    });
  }
  
  window.onload = displayNotes;
  