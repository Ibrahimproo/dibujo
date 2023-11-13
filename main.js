noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(640,420);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Posonet está iniciado");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristXWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference=" + difference);
    }
}

function draw(){
    background('#96A97');
    document.getElementById("square_side").innerHTML = "El alto y ancho del cuadrado será de: " + difference + "px"
    fill('#4682B4');
    stroke('#F90093');
    square(noseX, noseY, difference);


}