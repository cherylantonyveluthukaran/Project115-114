noseX=0;
noseY=0;

function preload(){
    mustache=loadImage('https://i.postimg.cc/PJXh4Ytx/mustache-by-hurricamo-on-deviantart-10.png');
//    mustache=loadImage('https://i.postimg.cc/bYL5KKyd/mustache01.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('poseNet is Inizialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x -17;
        noseY=results[0].pose.nose.y -15;
        console.log("nosex="+noseX);
        console.log("nosey="+noseY);
    }

}

function draw(){
image(video,0,0,300,300);
image(mustache,noseX,noseY,40,70);
}

 function take_snapshot(){
save('myFilterimg.png');

 }



