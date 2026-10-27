
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let box = 20;
let snake = [{x: 10 , y: 10}];
let dir ='RIGHT';
let food = randomFood();
let score = 0;
let highScore = localStorage.getItem('snakehigh') || 0;
document.getElementById('high').innerText = highScore;

    function randomFood(){
        return{
            x:Math.floor(Math.random() * 20),
            y:Math.floor(Math.random() * 20)
        };
    }