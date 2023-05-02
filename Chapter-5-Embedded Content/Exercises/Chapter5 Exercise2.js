

function playsound(a){
    var sound = document.getElementById('sound'+ a);
    
    var sounds = document.getElementsByTagName('sound');

    for(let num=0; num<sounds.length; num++) sounds[num].pause();
    
    sound.currentTime = 0;

    sound.play();
}