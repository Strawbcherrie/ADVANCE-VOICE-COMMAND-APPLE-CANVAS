x = 0;
y = 0;

apple="";
//experiment without ;
screen_width = 0;
screen_height = 0;

to_number = "";
speak_data = "";
//experiment with any variable or say xyz = ";" only
draw_apple = "";

function preload(){
  apple = loadImage("apple.png")
}
var SpeechRecognition = window.webkitSpeechRecognition;
//used for allowing use of microphone 
  
var recognition = new SpeechRecognition();
// the computer inputs a new speech every time, rather than showing the same one

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  // just for our referenece
  recognition.start();
  // starts the recognition of the speech that is the number of apples to be drawn
} 
 
recognition.onresult = function(event) {
  ////////////// Doubt in this line, what does the above code on line no 20 mean?????
console.log(event); 
 // this is so that we can derive or infer the speech from the console
 content = event.results[0][0].transcript;
  // This is so that we can derive or infer the new number from the console and store in the variable "content"
  to_number = Number(content);
  // this is to covert the number to gigits eg two to 2 or one hundred fifty-nine to 159 etc
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
   // for our reference

  if(Number.isInteger(to_number)){
    // set if loop for 1 apple and more apples
    document.getElementById("status").innerHTML = "Started drawing: " + to_number + "apples" ; 
    draw_apple = "set"
  }
  else{
    document.getElementById("status").innerHTML = "The speech has not recognized a number, It has recognized " + content ;
  }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  //what is the difference between inner and outer width and height ?
 canvas = createCanvas(screen_width -100, screen_height - 250);
 // why not subtract from width as well and why in this order, can we write or say technically type height first and then width;
 canvas.position(50, 190);
 // this is to give position to the canvas first is x and then is y axis
  // this is to give position to the canvas first is x and then is Zy axis
}

function draw() {
  if(draw_apple == "set")
  {

    for(var i = 1; i <= to_number; i++){
    // for(i = 1; i <= to_number; i++;);
    // why not like above
    // why can't we write like this -----> for(i = 1; i < to_number ; i= to_number);
    // and why cannot we simplky give i+1 rather thaan i++, that will be so simpler, though not professionalllllllaticsssssss haha;

      x = Math.floor(Math.random() * 800);
      y = Math.floor(Math.random() * 400);
     image(apple, x, y, 50, 50) * to_number;
      //to_number * image(apple, x, y, 50, 50)
    

  }
    document.getElementById("status").innerHTML = to_number + " Apples are drawn";
    speak();
    draw_apple = "";

  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = to_number + " Apples are drawn";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    
}