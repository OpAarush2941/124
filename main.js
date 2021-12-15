function setup(){
    canvas = createCanvas(600,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    classifier = ml5.poseNet(video,modelLoaded);
    classifier.on('pose',gotposes);
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
    }
}