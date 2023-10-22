let isResizing = false;
let isDragging = false;
let startX, startY, startWidth, startHeight;

const macWindow = document.getElementById('macWindow');
const windowHeader = document.getElementById('windowHeader');
const closeButton = document.getElementById('closeButton');
const maximizeButton = document.getElementById('maximizeButton');

// Dragging
windowHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - macWindow.getBoundingClientRect().left;
    startY = e.clientY - macWindow.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    macWindow.style.left = e.clientX - startX + 'px';
    macWindow.style.top = e.clientY - startY + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Close window
closeButton.addEventListener('click', () => {
    macWindow.style.display = 'none';
});

// Maximize/Restore window
let isMaximized = false;
maximizeButton.addEventListener('click', () => {
    if (!isMaximized) {
        macWindow.style.top = '0';
        macWindow.style.left = '0';
        macWindow.style.width = '100vw';
        macWindow.style.height = '100vh';
        isMaximized = true;
    } else {
        macWindow.style.width = '300px';
        macWindow.style.height = '400px';
        macWindow.style.top = '50%';
        macWindow.style.left = '50%';
        macWindow.style.transform = 'translate(-50%, -50%)';
        isMaximized = false;
    }
});

// This is just a basic setup. You can expand upon this with more features, animations, etc.

