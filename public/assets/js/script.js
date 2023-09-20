// Function to get the theme from localStorage or prefers-color-scheme
function getTheme() {
  const storedTheme = localStorage.getItem('color-mode');
  if (storedTheme) {
    return storedTheme;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

// Function to set the theme class on the document element
function setTheme(theme) {
  document.documentElement.classList.add(theme);
  document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
}

// Initialize theme
let theme = getTheme();
setTheme(theme);

// Listen for changes in prefers-color-scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (!localStorage.getItem('color-mode')) {
    theme = event.matches ? 'dark' : 'light';
    setTheme(theme);
  }
});