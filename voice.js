// Sprachsteuerung mit Web Speech API (nur in Chrome sicher)
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'de-DE';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  document.addEventListener('keydown', function (e) {
    if (e.key === ' ' && !e.repeat) {
      recognition.start();
    }
  });

  recognition.onresult = function (event) {
    const spoken = event.results[0][0].transcript;
    document.getElementById('input').value = spoken;
    send();
  };
}