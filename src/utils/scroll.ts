export const scrollToTop = (smooth = false) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? 'smooth' : 'instant',
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

export const disableBrowserScrollRestoration = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
};
