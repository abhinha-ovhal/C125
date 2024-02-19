wrist1x = 0;
wrist1x = 0;
difference  = 0;
function preload(){

}
function gotResults(results){
    if(results.length > 0){
        console.log(results);
        wrist1x = results[0].pose.leftWrist.x;
        wrist2x = results[0].pose.rightWrist.x;
        difference = Math.floor(wrist1x - wrist2x);
        
    }
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500)
    canvas = createCanvas(1000, 500);
    canvas.position(650, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}

function draw(){
    background("#f21b58");
    textSize(difference);
    fill("white");
    text("ABHINHA", 0, 250);
}

function modelLoaded(){
    console.log("PoseNet is initialised.");
}

