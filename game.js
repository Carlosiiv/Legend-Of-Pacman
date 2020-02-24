console.log("hello");

var gameDiv = document.getElementById("game");
var heroDiv = document.getElementById("hero");

var world = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,2,1,0,1],
    [1,0,1,2,1,0,1,1,0,1],
    [1,0,1,1,1,0,0,1,1,1],
    [1,0,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,1],
    [1,0,1,2,1,2,1,0,0,1],
    [1,2,0,0,0,0,0,0,2,1],
    [1,1,1,1,1,1,1,1,1,1]
];

function drawWorld() {
    var output = "";
    for(var i=0; i<world.length; i++) {
        output += `<div class="row">`;
        for(var j=0; j<world[i].length; j++) {
            if(world[i][j] === 1) {
                output += `<div class="block wall"></div>`;
            } else if(world[i][j] === 0) {
                output += `<div class="block empty"></div>`;
            } else if(world[i][j] === 2) {
                output += `<div class="block has-ring"></div>`;
            }
        }
        output += `</div>`;
    }
    gameDiv.innerHTML = output;
}
drawWorld();

var hero = {
    rings: 0,
    x: 50,
    y: 50,
};

document.onkeydown = function(event) {
    if(event.key === "ArrowUp") {
        hero.y -= 50;
    }
    if(event.key === "ArrowDown") {
        hero.y += 50;
    }
    if(event.key === "ArrowLeft") {
        hero.x -= 50;
    }
    if(event.key === "ArrowRight") {
        hero.x += 50;
    }

    heroDiv.style.top = hero.y + "px";
    heroDiv.style.left = hero.x + "px";

    checkCollisions();

}

function checkCollisions() {
    var x = hero.x / 50;
    var y = hero.y / 50;
    console.log(world[y][x]);

    // 2 is a ring!
    if(world[y][x] === 2) {
        hero.rings++;
        world[y][x] = 0;
        drawWorld();
        if(hero.rings === 6) {
            alert("congratulations!");
        }
    }

}