document.addEventListener('DOMContentLoaded', () => {
  const windows = document.querySelectorAll('.window');

  windows.forEach(window => {
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
    };
  });
});
