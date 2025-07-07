const output = document.getElementById("output");
const input = document.getElementById("input");

function send() {
  const text = input.value.trim();
  if (!text) return;
  appendMessage("🧑", text);
  input.value = "";
  getJarvisResponse(text);
}

function appendMessage(sender, message) {
  const div = document.createElement("div");
  div.textContent = `${sender}: ${message}`;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

async function getJarvisResponse(prompt) {
  appendMessage("🤖", "Denke...");
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/microsoft/phi-2", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: prompt })
    });
    const result = await response.json();
    const answer = result?.[0]?.generated_text || "Antwort fehlgeschlagen.";
    appendMessage("🤖", answer);
  } catch (error) {
    appendMessage("🤖", "Fehler bei der Antwort.");
  }
}