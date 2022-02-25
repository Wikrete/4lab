
const playBtn = document.querySelector('.play-btn');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


const audio = new Audio();

let isplay = false;

let name = 1;

function playAudio() {

    if (isplay == true ){

        audio.pause();
        isplay = false;
        
        playBtn.classList.toggle('pause');
        return;
    }

  audio.src = `audio/${name}.mp3`;

  audio.currentTime = 0;
  isplay = true ;

  playBtn.classList.toggle('pause');
  audio.play();
}


function next()
{

if (name == 2){

name = 1;
playAudio()
return;

}

else{
  name + 1;
  playAudio()
  return;
}
}

function prev()
{

  if (name == 1){

    name = 2;
    
    return;
    
    }
    
    else{
      name - 1;
      
      return;
    }

}

playBtn.addEventListener('click', playAudio);
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);