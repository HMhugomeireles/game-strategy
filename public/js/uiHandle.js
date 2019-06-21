let wHeight = $(window).height();
let wWidth = $(window).width();
let player = {} //This is all things "this" player

let canvas = document.querySelector('#canvasGame');
let context = canvas.getContext('2d');
canvas.width = wWidth;
canvas.height = wHeight;

