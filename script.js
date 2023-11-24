// Global variables for video and canvas elements
let video;
let canvases = [];

// Toggle video display on and off
function toggleVideo() {
    if (video) {
        if (video.playing) {
            video.pause();
            canvases.forEach(cnv => cnv.hide());
        } else {
            video.loop();
            canvases.forEach(cnv => cnv.show());
        }
    }
}

// p5.js sketch
function makeSketch(windowDiv) {
    return function (p) {
        let video;

        p.setup = function () {
            let cnv = p.createCanvas(windowDiv.offsetWidth, windowDiv.offsetHeight);
            cnv.parent(windowDiv);
            video = p.createCapture(p.VIDEO);
            video.size(cnv.width, cnv.height);
            video.hide();
            canvases.push(cnv);
        };

        p.draw = function () {
            p.background(0);
            video.loadPixels();
            // Draw the video onto the canvas
            p.image(video, 0, 0, p.width, p.height);
        };
    };
}

// Initialize p5 sketches and video
function setup() {
    // Grab all the window content divs
    const windows = document.querySelectorAll('.window .content');
    windows.forEach(windowDiv => {
        new p5(makeSketch(windowDiv), windowDiv);
    });
}

// Setup key press event listener
document.addEventListener('keydown', (e) => {
    if (e.key === 'v' || e.key === 'V') {
        toggleVideo();
    }
});

// Initialize the sketches after the window has loaded
window.onload = setup;



