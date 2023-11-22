:root {
  --background-color-light: #f0f0f0; /* Light mode background */
  --window-shadow-light: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light mode window shadow */
  --window-background-light: #ffffff; /* Light mode window background */
  --title-bar-background-light: #e1e1e1; /* Light mode title bar background */
  --button-close-light: #ff5f57; /* Light mode close button color */
  --button-minimize-light: #ffbd2e; /* Light mode minimize button color */
  --button-maximize-light: #27c93f; /* Light mode maximize button color */

  --background-color-dark: #1e1e1e; /* Dark mode background */
  --window-shadow-dark: 0 4px 8px rgba(0, 0, 0, 0.5); /* Dark mode window shadow */
  --window-background-dark: #333; /* Dark mode window background */
  --title-bar-background-dark: #555; /* Dark mode title bar background */
  --button-close-dark: #e84118; /* Dark mode close button color */
  --button-minimize-dark: #e1b12c; /* Dark mode minimize button color */
  --button-maximize-dark: #4cd137; /* Dark mode maximize button color */
}

body {
  background-color: var(--background-color-light);
  transition: background-color 0.3s;
}

.desktop {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
}

.window {
  width: calc(50% - 20px);
  margin: 10px;
  border: 1px solid #ccc;
  background-color: var(--window-background-light);
  border-radius: 5px;
  box-shadow: var(--window-shadow-light);
  overflow: hidden;
  position: relative;
  padding-top: calc(50% - 20px);
  box-sizing: border-box;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.title-bar {
  cursor: grab;
  background-color: var(--title-bar-background-light);
  padding: 6px 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1;
  transition: background-color 0.3s;
}

.title-bar-buttons {
  display: flex;
}

.button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 4px;
  transition: background-color 0.3s;
}

.close { background-color: var(--button-close-light); }
.minimize { background-color: var(--button-minimize-light); }
.maximize { background-color: var(--button-maximize-light); }

.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

/* Dark mode specific styles */
body.dark-mode {
  background-color: var(--background-color-dark);
}

body.dark-mode .window {
  background-color: var(--window-background-dark);
  box-shadow: var(--window-shadow-dark);
}

body.dark-mode .title-bar {
  background-color: var(--title-bar-background-dark);
}

body.dark-mode .button.close { background-color: var(--button-close-dark); }
body.dark-mode .button.minimize { background-color: var(--button-minimize-dark); }
body.dark-mode .button.maximize { background-color: var(--button-maximize-dark); }


