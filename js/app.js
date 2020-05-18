window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.getElementById(`${e.keyCode}`);

  if(!audio) return;

  key.classList.add('pressed')
  audio.currentTime = 0;

  setTimeout(function(){
    key.classList.remove('pressed')
  }, 0600)

  audio.play();
})