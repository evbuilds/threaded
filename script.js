let video;
let videoPlaying = false;
let videos = [];

function setup() {
  noCanvas();
  const windows = document.querySelectorAll('.window .content');

  windows.forEach((windowContent, index) => {
    let sketch = function (p) {
      let video;
      p.setup = function () {
        p.createCanvas(320, 240).parent(windowContent);
        video = p.createCapture(p.VIDEO);
        video.size(320, 240);
        video.hide();
        videos.push(video);
      };

      p.draw = function () {
        if (videoPlaying) {
          p.background(0);
          p.image(video, 0, 0, p.width, p.height);
        }
      };
    };
    new p5(sketch);
  });
}

function toggleVideo() {
  videoPlaying = !videoPlaying;
  videos.forEach(video => {
    if (videoPlaying) {
      video.loop();
    } else {
      video.pause();
    }
  });
  
  document.querySelectorAll('.window .content img').forEach(img => {
    img.style.display = videoPlaying ? 'none' : 'block';
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function closeWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  if (windowElement) {
    windowElement.style.display = 'none';
  }
}

function maximizeWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  if (windowElement) {
    windowElement.classList.toggle('maximized');
  }
}

function applySquareResizing(windowElement) {
  const content = windowElement.querySelector('.content');
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const squareSize = `${entry.contentRect.width}px`;
      windowElement.style.height = squareSize;
      content.style.height = squareSize;
    }
  });
  resizeObserver.observe(content);
}

document.addEventListener('DOMContentLoaded', () => {
  const windows = document.querySelectorAll('.window');

  windows.forEach(window => {
    applySquareResizing(window);

    const closeButton = window.querySelector('.close');
    const maximizeButton = window.querySelector('.maximize');
    
    closeButton.onclick = function () {
      closeWindow(window.id);
    };

    maximizeButton.onclick = function () {
      maximizeWindow(window.id);
    };
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
      toggleDarkMode();
    } else if (e.key === 'v' || e.key === 'V') {
      toggleVideo();
    }
  });

  setup(); // Initialize p5 sketches and video
});
