difference = 0;
rightwristX = 0;
leftwristX = 0;

function preload()
{

}
function setup()
{
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
{
    console.log(results);
    rightwristX = results[0].pose.rightWrist.x;
    leftwristX = results[0].pose.leftWrist.x;
    difference = floor(leftwristX - rightwristX);
    console.log("leftwristX = " + leftwristX + " rightwristX = " + rightwristX + " difference = " + difference);
}
}
function modelLoaded()
{
    console.log("Posenet is initialized");
}
function draw()
{
    background('#0F52BA');
    document.getElementById("font_size").innerHTML = "font size will be = " + difference + " px";
    textSize(difference);
    fill('rgb(255, 0, 128)');
    text('Isha',50,400);
}
