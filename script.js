// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Placeholder function for closing a window
function closeWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  if (windowElement) {
    windowElement.style.display = 'none';
  }
}

// Placeholder function for maximizing a window
function maximizeWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  if (windowElement) {
    windowElement.classList.toggle('maximized');
  }
}

// Function to apply square resizing
function applySquareResizing(windowElement) {
  const content = windowElement.querySelector('.content');
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      // Set height equal to the current width to maintain 1:1 aspect ratio
      const squareSize = `${entry.contentRect.width}px`;
      windowElement.style.height = squareSize;
      content.style.height = squareSize; // Apply the same to the content div if needed
    }
  });

  resizeObserver.observe(content); // Observe the `.content` div as it will be resized
}

document.addEventListener('DOMContentLoaded', () => {
  const windows = document.querySelectorAll('.window');

  // Apply square resizing to each window
  windows.forEach(window => {
    applySquareResizing(window);
    
    // Event listeners for window title bar actions
    const titleBar = window.querySelector('.title-bar');
    const closeButton = window.querySelector('.close');
    const maximizeButton = window.querySelector('.maximize');
    
    // Draggable functionality
    titleBar.onmousedown = function (e) {
      let offsetX = e.clientX - parseInt(window.style.left, 10);
      let offsetY = e.clientY - parseInt(window.style.top, 10);

      function mouseMoveHandler(e) {
        window.style.top = `${e.clientY - offsetY}px`;
        window.style.left = `${e.clientX - offsetX}px`;
      }

      function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      }

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };
    
    // Close window functionality
    closeButton.onclick = function () {
      closeWindow(window.id);
    };
    
    // Maximize window functionality
    maximizeButton.onclick = function () {
      maximizeWindow(window.id);
    };
  });

  // Event listener for keyboard shortcut to toggle dark mode
  document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
      toggleDarkMode();
    }
  });
});

