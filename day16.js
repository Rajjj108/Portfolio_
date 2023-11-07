function createRandomBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    const size = Math.floor(Math.random() * 51) + 50; // Random size between 50 and 100
    box.style.width = size + 'px';
    box.style.height = size + 'px';

    const container = document.getElementById('content');
    const maxX = container.clientWidth - size;
    const maxY = container.clientHeight - size;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    box.style.left = x + 'px';
    box.style.top = y + 'px';

    container.appendChild(box);

    // Animate the box's movement
    moveRandomBox(box);
}

function moveRandomBox(box) {
    const container = document.getElementById('content');
    const maxX = container.clientWidth - box.clientWidth;
    const maxY = container.clientHeight - box.clientHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    box.style.transform = `translate(${x}px, ${y}px)`;

    setTimeout(() => {
        moveRandomBox(box);
    }, 2000); // Change this value to adjust the animation speed
}

// Create random boxes and start the animation
for (let i = 0; i < 20; i++) { // Create 20 boxes as an example, you can adjust the number
    createRandomBox();
}


document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const left = document.querySelector('.left');
    const mid = document.querySelector('.mid');
    const right = document.querySelector('.right');
  
    // Add and remove classes to trigger animations sequentially
    setTimeout(() => {
      content.classList.add('animate-background');
    }, 500);
  
    setTimeout(() => {
      left.classList.add('animate-left');
    }, 1000);
  
    setTimeout(() => {
      mid.classList.add('animate-mid');
    }, 1500);
  
    setTimeout(() => {
      right.classList.add('animate-right');
    }, 2000);
  });

  