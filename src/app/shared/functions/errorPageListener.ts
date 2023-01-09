export function addListener() {
  const scrollButton = document.querySelector('.scroll-image');

  if (scrollButton) {
      scrollButton.addEventListener('click', () => {
          window.location.hash = '#start';
      });
  }
}