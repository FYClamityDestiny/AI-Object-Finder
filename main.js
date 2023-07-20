console.log("ur mom.");
let statusmodel = "";
let objects = [];

function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent("canvasContainer"); // Set the parent element for the canvas
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("modelstatus").innerHTML = "Status: Detecting Objects";
  objectfind = document.getElementById("textbox").value;
}

function modelLoaded() {
  console.log("Model Loaded");
  statusmodel = true;
}

function draw() {
  image(video, 0, 0, 300, 300);
  if (statusmodel !== "") {
    objectDetector.detect(video, gotResults); // Call object detection on the video frame
    for (let i = 0; i < objects.length; i++) {
      document.getElementById("modelstatus").innerHTML = "Status: Object Detected";
      const percent = floor(objects[i].confidence * 100);
      const label = objects[i].label;
      text(label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    objects = results;
  }
}