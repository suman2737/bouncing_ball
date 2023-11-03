const canvas = document.getElementById('canvas')
const countButton = document.getElementById('countButton');
const ctx = canvas.getContext('2d')
let count=0;

const ball={
    x: 300,
    y: 300,
    radius: 40,
    dx: 5,
    dy: 4
}

// Function to draw the a ball on the canvas
function drawball(){
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2)
    ctx.fillStyle = "white"
    ctx.fill()
}

drawball()


// Function to update the ball position and handle bouncing
function updateBallPosition(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    drawball()
    ball.x +=ball.dx
    ball.y+=ball.dy
    requestAnimationFrame(updateBallPosition)

    if(ball.x+ball.radius>canvas.width || ball.x-ball.radius<0){
        ball.dx*=-1
        count++
        updateBallPositionCount();
    }

    if(ball.y+ball.radius>canvas.height || ball.y-ball.radius<0){
        ball.dy*=-1
        count++
        updateBallPositionCount();
    }
}

// Event listener to move the ball to the clicked location
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    ball.x = mouseX;
    ball.y = mouseY;
});

// Function to reset the  count button
function resetCountBtn() {
    count = 0;
    updateBallPositionCount();
}

// Function to update the displayed  count button
function updateBallPositionCount() {
    countButton.innerText = `Count: ${count}`;
}

updateBallPosition()
    