document.addEventListener('DOMContentLoaded', () => {
  const windows = document.querySelectorAll('.window');

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

  // Apply square resizing to each window
  windows.forEach(window => {
    applySquareResizing(window);

    // Your existing code for draggable functionality
    const titleBar = window.querySelector('.title-bar');
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

    window.querySelector('.close').onclick = function () {
      window.style.display = 'none';
    };

    window.querySelector('.maximize').onclick = function () {
      window.classList.toggle('maximized');
      if (window.classList.contains('maximized')) {
        // Apply maximize logic here
      } else {
        // Apply restore logic here
      }
    };
  });
});
