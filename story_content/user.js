function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5elZDs5hMHk":
        Script1();
        break;
      case "6Gqp3e00v6J":
        Script2();
        break;
      case "6ZuDO3LDrnw":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="soundku.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script2()
{
  var audio = document.getElementById("bgSongku");



if(audio){

    

audio.pause();



}
}

function Script3()
{
  var audio = document.getElementById("bgSongku");



if(audio){

    

audio.play();



}
}

