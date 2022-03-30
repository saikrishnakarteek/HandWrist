noseX=0;
noseY=0;

var leftWristX = 0;
var RightWristX  = 0;
var difference = 10;

function setup() {
    Video=createCapture(VIDEO);
    Video.size(550,500);
    Video.position(200,150);
    canvas = createCanvas(550,450);
    canvas.position(750,170);
    poseNet=ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotposes);
};


function draw(){
    background('white');
    fill('red');
    stroke('blue');
    square(noseX, noseY, difference);
    
}


function modelLoaded(){
    console.log('posenet is Initialised!');

}


function gotposes(results){
 if(results.length>0){
     console.log(results);
     noseX= results[0].pose.nose.x;
     noseY= results[0].pose.nose.y;
     console.log("noseX=" + noseX+"noseY="+ noseY);
     
     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);
     
 }
}