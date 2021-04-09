canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
winner_winner = "none";
winner = "";
car_width = 100;
car_height = 100;
car_2_width = 100;
car_2_height = 100;
race_background = "depositphotos_22495909-stock-illustration-racing-horizontal-backdrop.jpg";
car_background = "car1.png";
car_2_background = "car2.png";
car_x = 0;
car_y = 60;
car_2_x = 0;
car_2_y = 240;
function add() {
    background_new_image = new Image();
    background_new_image.onload = add_background;
    background_new_image.src = race_background;
    car_new_image = new Image();
    car_new_image.onload = add_car_background;
    car_new_image.src = car_background;
    car_2_new_image = new Image();
    car_2_new_image.onload = add_car_2_background;
    car_2_new_image.src = car_2_background;
}
function add_background() {
    ctx.drawImage(background_new_image, 0, 0, canvas.width, canvas.height);
}
function add_car_background() {
    ctx.drawImage(car_new_image, car_x, car_y, car_width, car_height);
}
function add_car_2_background() {
    ctx.drawImage(car_2_new_image, car_2_x, car_2_y, car_2_width, car_2_height);
}
window.addEventListener("keydown", my_keydown);
//W(87) makes the car go right, S(83) makes the car go left, A(65) makes the car go up and D(40) makes it go down
function my_keydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);
    if (keyPress == '87') {
        up1();
        console.log("Car 1 - Up");
    }
    if (keyPress == '83') {
        down1();
        console.log("Car 1 - Down");
    }
    if (keyPress == '65') {
        left1();
        console.log("Car 1 - Left");
    }
    if (keyPress == '68') {
        right1();
        console.log("Car 1 - Right");
    }
    if (keyPress == '38') {
        up2();
        console.log("Car 2 - Up");
    }
    if (keyPress == '40') {
        down2();
        console.log("Car 2 - Down");
    }
    if (keyPress == '37') {
        left2();
        console.log("Car 2 - Left");
    }
    if (keyPress == '39') {
        right2();
        console.log("Car 2 - Right");
    }
}
function up1() {
    if (car_x <= 700 && winner_winner != "won") {
        car_x = car_x + Math.floor(Math.random()*10)+5;
        add_background();
        add_car_background();
        add_car_2_background();
    } else {
        winner_winner = "won";
        winner = "Car 1 won!";
        document.getElementById("result_result").innerHTML = winner;
    }
}
function down1() {
    if (car_x >= 0 && winner_winner != "won") {
        car_x = car_x - Math.floor(Math.random()*10)-5;
        add_background();
        add_car_background();
        add_car_2_background();
    }
}
function left1() {
    if (car_y >= 0 && winner_winner != "won") {
        car_y = car_y - Math.floor(Math.random()*10)-5;
        add_background();
        add_car_background();
        add_car_2_background();
    }
}
function right1() {
    if (car_y <= 300 && winner_winner != "won") {
        car_y = car_y + Math.floor(Math.random()*10)+5;
        add_background();
        add_car_background();
        add_car_2_background();
    }
}
function up2() {
    if (car_2_x <= 700 && winner_winner != "won") {
        car_2_x = car_2_x + Math.floor(Math.random()*10)+5;
        add_background();
        add_car_background();
        add_car_2_background();
    } else {
        winner_winner = "won";
        winner = "Car 2 won!";
        document.getElementById("result_result").innerHTML = winner;
    }
}
function down2() {
    if (car_2_x >= 0 && winner_winner != "won") {
        car_2_x = car_2_x - Math.floor(Math.random()*10)-5;
        add_background();
        add_car_background();
        add_car_2_background();
    }
}
function left2() {
    if (car_2_y >= 0 && winner_winner != "won") {
        car_2_y = car_2_y - Math.floor(Math.random()*10)-5;
        add_background();
        add_car_background();
        add_car_2_background();
    }
}
function right2() {
    if (car_2_y <= 300 && winner_winner != "won") {
        car_2_y = car_2_y + Math.floor(Math.random()*10)+5;
        add_background();
        add_car_background();
        add_car_2_background();
    }
}