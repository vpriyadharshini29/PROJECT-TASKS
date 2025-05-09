const chatBox = document.getElementById("chat");
const input = document.getElementById("messageInput");

let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
displayMessages();

function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  const userMessage = {
    text,
    timestamp: new Date().toLocaleString(),
    sender: "user"
  };

  messages.push(userMessage);
  localStorage.setItem("chatMessages", JSON.stringify(messages));
  displayMessages();
  input.value = "";

  
  setTimeout(() => {
    const botReply = {
      text: generateBotReply(text),
      timestamp: new Date().toLocaleString(),
      sender: "bot"
    };
    messages.push(botReply);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    displayMessages();
  }, 1000);
}

function displayMessages() {
  chatBox.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message";
    div.style.textAlign = msg.sender === "bot" ? "left" : "right";
    div.innerHTML = `<strong>${msg.sender === "bot" ? "Bot" : "You"}:</strong> ${msg.text}<br><span class="timestamp">${msg.timestamp}</span>`;
    chatBox.appendChild(div);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}


function generateBotReply(userText) {
  const lower = userText.toLowerCase();
  if (lower.includes("hello")) return "Hello! How can I help you?";
  if (lower.includes("how are you")) return "I'm just code, but thanks for asking!";
  if (lower.includes("bye")) return "Goodbye! Have a great day!";
  return "I'm just a bot, but I'm learning!";
}
