console.log("hello");

var gameDiv = document.getElementById("game");
var heroDiv = document.getElementById("hero");

var world = [
    [1,1,1,1,1,4,1,1,1,1],
    [1,0,0,0,0,0,0,0,3,1],
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
            }   else if(world[i][j] === 3) {
                output += '<div class ="block has-key"></div>';
            } else if (world[i][j] === 4) {
                output += `<div class="block has-door"></div>`;
            }
        }
        output += `</div>`;
    }
    gameDiv.innerHTML = output;
}
drawWorld();

var hero = {
    rings: 0,
    keys: 0,
    x: 50,
    y: 50,
};

document.onkeydown = function(event) {
    var x = hero.x / 50;
    var y = hero.y / 50;
    if(event.key === "ArrowUp" && world[y -1][x] !== 1) {
        hero.y -= 50;
    
    }
    else (hero.y = hero.y);
    if(event.key === "ArrowDown" && world[y +1][x]  !== 1) {
        hero.y += 50;
    }
    else (hero.y = hero.y);
    if(event.key === "ArrowLeft" && world[y][x-1]  !== 1) {
        hero.x -= 50;
    }
    if(event.key === "ArrowRight" && world[y][x+1]  !== 1) {
        hero.x += 50;
    }
    else (hero.x = hero.x);
    console.log(event.key)
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
            alert("Congratulations! You've Unlocked The Key!");
            
        }
    }
    if(world[y][x] === 3 && hero.rings === 6){
        hero.key++;
        world[y][x] = 0;
        drawWorld();
    }

}