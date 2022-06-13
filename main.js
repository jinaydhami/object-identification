img ="";
status="";
objects = [];

function preload() {
img = loadImage("dog_cat.jpg");


}

function setup(){

    canvas = createCanvas(600,450 );
    canvas.center();
    objectDectector=ml5.objectDectector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";

}


function gotresults(error , result) {

if (error) {
    console.log(error);
}

console.log(result);
objects = result ;

}

function draw() {

image(img,0,0,600,450);


    if(status != ""){

        for(i=0, i < object.length; 1++)
        {
            document.getElement("status").innerHTML = "status = Object Detected" ;

            fill("#FF0000");
            percent = floor(object[i].condfidence * 100);
            text(object[i].label + "" + percent + "%" , object[i].x , object[i].y );
            nofill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            

        }
    }



}

function modelLoaded() {

    console.log("model loaded !");
    status = true ;
    objectDectector.detect(img , gotResult);
}