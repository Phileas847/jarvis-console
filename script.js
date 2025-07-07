const output = document.getElementById("output");
const input = document.getElementById("input");

function send() {
  const text = input.value.trim();
  if (!text) return;
  appendMessage("🧑", text);
  input.value = "";
  respond(text);
}

function appendMessage(sender, message) {
  const div = document.createElement("div");
  div.textContent = `${sender}: ${message}`;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
}

function respond(text) {
  let reply = "Verstanden, Sir.";

  if (text.toLowerCase().includes("status")) {
    reply = "System läuft stabil. Keine Bedrohungen erkannt.";
  } else if (text.toLowerCase().includes("ziel")) {
    reply = "Ziel ist aktiv: Sieg um jeden Preis.";
  } else if (text.toLowerCase().includes("ayanokoji")) {
    reply = "Analysemodus Ayanokōji aktiviert.";
  }

  setTimeout(() => appendMessage("🤖", reply), 1000);
}