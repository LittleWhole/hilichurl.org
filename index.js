// Get a reference to the canvas element
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to hold the dots
let dots = [];

// Define a class to represent a dot
class Dot {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3;
        this.size = Math.random() * 5 + 1;
        this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }

    // Method to draw the dot
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Method to update the dot's position
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
}

// Create 100 dots
for (let i = 0; i < 100; i++) {
    dots.push(new Dot());
}

// Function to update and draw all dots
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let dot of dots) {
        dot.update();
        dot.draw();
    }
}

// Start the animation
animate();