// Sprachsteuerung mit Web Speech API
if ('speechSynthesis' in window && 'SpeechRecognition' in window) {
  const recognition = new window.SpeechRecognition();
  recognition.lang = 'de-DE';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  document.body.addEventListener('keydown', function (e) {
    if (e.key === ' ') {
      recognition.start();
    }
  });

  recognition.onresult = function (event) {
    const spoken = event.results[0][0].transcript;
    document.getElementById('input').value = spoken;
    send();
  };
}