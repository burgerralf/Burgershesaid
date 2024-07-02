// script.js

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

if (isMobileDevice()) {
  // Spezifische Anpassungen für Mobilgeräte vornehmen
  var chatContainer = document.getElementById('chat-container');
  chatContainer.style.bottom = '10px';
  chatContainer.style.right = '10px';
}

document.getElementById('chat-icon').addEventListener('click', function() {
  var chatWindow = document.getElementById('chat-window');
  if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
    chatWindow.style.display = 'block';
  } else {
    chatWindow.style.display = 'none';
  }
});
