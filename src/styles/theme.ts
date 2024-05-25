const darkModeElements = 'hsl(209, 23%, 22%)';
const darkModeBackground = 'hsl(207, 26%, 17%)';
const lightModeText = 'hsl(200, 15%, 8%)';
const lightModeInput = 'hsl(0, 0%, 52%)';
const lightModeBackground = 'hsl(0, 0%, 98%)';
// Dark Mode Text & Light Mode Elements
const white = 'hsl(0, 0%, 100%)';

// Theme
export const lightTheme = {
  colors: {
    background: lightModeBackground,
    text: lightModeText,
    element: white,
  },
};

export const darkTheme = {
  colors: {
    background: darkModeBackground,
    text: white,
    element: darkModeElements,
  },
};