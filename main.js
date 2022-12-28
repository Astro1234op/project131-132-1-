img = "";
function preload() 
{
    img = loadImage('dog_cat.jpg');
}




function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();

}


function draw() 
{
    image(img, 0, 0, 640,420);
    fill("#000000");
    text("Cat", 235, 75);
    
    noFill();
    stroke("#FFFFFF");
    rect(230, 60, 400, 350);

    
}


