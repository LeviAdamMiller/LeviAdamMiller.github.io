/*
  Author: Levi Miller
  Date: 2/8/23
  File: skylines.js
  Individual Assignment 3 Skyline scripts
 */
//get my canvas and the context of the canvas

const WATER_HGT = 100;
const GROUND_HGT = 10;
const CVS_WIDTH = 600;
const CVS_HEIGHT = 400;
const BUILD_WIDTH = 55;
const BUILD_MIN_H = 30;
const BUILD_MAX_H = 150;
const WINDOW_SIZE = 5;
const NUM_BUILDINGS = 15;
const FONT_X = 400;
const FONT_Y = 50;
const WINDOW_ROWS = 10;
const WINDOW_COLUMNS = 4;
const WINDOW_SPACE = 7;
const WINDOW_SIZE_PLUS_SPACE = WINDOW_SPACE + WINDOW_SIZE;

function scene() {
    let canvas = document.getElementById("my-canvas");
    let context = canvas.getContext("2d");

    function drawBackground() {

        context.fillStyle = "rgb(51,152,253)";
        context.fillRect(0, 0, CVS_WIDTH, CVS_HEIGHT);
    }

    function drawGround() {
        context.fillStyle = "rgb(1,1,17)";
        context.fillRect(0, CVS_HEIGHT-WATER_HGT-GROUND_HGT, CVS_WIDTH, GROUND_HGT);
    }

    function drawWater() {
        context.fillStyle = "rgb(0,51,102)";
        context.fillRect(0, CVS_HEIGHT-WATER_HGT, CVS_WIDTH, WATER_HGT);
    }

    function drawingBuilding() {
        function random(low, high) {
            return Math.random() * (high - low + 1) + low;
        }

        const x = random(WINDOW_COLUMNS,CVS_WIDTH - BUILD_WIDTH - WINDOW_COLUMNS);
        const h = random(BUILD_MIN_H, BUILD_MAX_H) * -1;

        context.fillStyle = "rgb(0,1,1)";
        context.fillRect(x, CVS_HEIGHT-WATER_HGT-GROUND_HGT, BUILD_WIDTH, h );


        const WINDOW_X = x + WINDOW_SPACE;
        const WINDOW_Y = CVS_HEIGHT-WATER_HGT-GROUND_HGT + h + WINDOW_SPACE;



        // draw all rows of building
        for (let i = 0; i < WINDOW_ROWS; i++) {
            // adjust the x position of current window
            for (let j = 0; j < WINDOW_COLUMNS; j++) {

                // draw the window
                context.fillStyle = "rgb(253,253,253)";
                context.fillRect(WINDOW_X + j * WINDOW_SIZE_PLUS_SPACE, WINDOW_Y + i * WINDOW_SIZE_PLUS_SPACE, WINDOW_SIZE, WINDOW_SIZE);

            }
            // if the window is too low
            if (WINDOW_Y + i * WINDOW_SIZE_PLUS_SPACE > CVS_HEIGHT-WATER_HGT-GROUND_HGT-BUILD_MIN_H) {
                break;
            }
        }
    }

    drawBackground();
    drawWater();
    drawGround();

    for (let i = 0; i < NUM_BUILDINGS; i++) {
        drawingBuilding();

    }

    context.font = "30px Times New Roman";
    context.fillText("New York City", FONT_X, FONT_Y);
}
scene();
