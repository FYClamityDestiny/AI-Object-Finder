statusmodel = "";
function preload(){

}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide;
}
function start(){
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status:Detecting Objects";
objectfind = document.getElementById("textbox").value;
}
function modelLoaded(){
console.log("Model Loaded");
statusmodel = true;
}
function draw(){
image(video,0,0,300,300);
}