const macWindow = document.querySelector('.mac-window');
const windowHeader = macWindow.querySelector('.window-header');
const closeButton = macWindow.querySelector('.close');
const maximizeButton = macWindow.querySelector('.maximize');

let [isDragging, isMaximized, startX, startY] = [false, false, 0, 0];

windowHeader.addEventListener('mousedown', e => {
    isDragging = true;
    const rect = macWindow.getBoundingClientRect();
    [startX, startY] = [e.clientX - rect.left, e.clientY - rect.top];
});

document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    macWindow.style.left = `${e.clientX - startX}px`;
    macWindow.style.top = `${e.clientY - startY}px`;
});

document.addEventListener('mouseup', () => isDragging = false);

closeButton.addEventListener('click', () => macWindow.style.display = 'none');

maximizeButton.addEventListener('click', () => {
    isMaximized = !isMaximized;
    if (isMaximized) {
        Object.assign(macWindow.style, { top: '0', left: '0', width: '100vw', height: '100vh', transform: '' });
    } else {
        Object.assign(macWindow.style, { width: '300px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });
    }
});
