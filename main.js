function setup(){
    canvas = createCanvas(800,700)
    canvas.position(370,250)
    webcam = createCapture(VIDEO);
    webcam.hide()
}
function draw(){
    image(webcam,200,180,400,350);
    fill(255,110,0);
    stroke(0,0,0);
    circle(90,100,80);
    fill(255,110,0);
    stroke(0,0,0);
    circle(700,100,80);
    fill(255,110,0);
    stroke(0,0,0);
    circle(90,600,80);
    fill(255,110,0);
    stroke(0,0,0);
    circle(700,600,80);
    fill(255,110,0);

    stroke(0,0,0);
    circle(90,350,80);
    fill(255,110,0);
    stroke(0,0,0);
    circle(400,100,80);
    fill(255,110,0);
    stroke(0,0,0);
    circle(400,600,80);
    fill(255,110,0);
    stroke(0,0,0);
    circle(700,350,80);
    fill(255,110,0);

    fill(255, 10, 144);
    rect(130, 95, 230, 10);
    fill(255, 10, 144);
    rect(440, 95, 220, 10);
    fill(255, 10, 144);
    rect(130, 600, 230, 10);
    fill(255, 10, 144);
    rect(440, 600, 220, 10);
    fill(255, 10, 144);
    rect(130, 95, 230, 10);

    fill(255, 10, 144);
    rect(90, 140, 10, 170);
    fill(255, 10, 144);
    rect(90, 390, 10, 170);
    fill(255, 10, 144);
    rect(695, 140, 10, 170);
    fill(255, 10, 144);
    rect(695, 390, 10, 170);
}

function takeSnapshot(){
    save('Natasha_this_is_ur_gift.png')
}