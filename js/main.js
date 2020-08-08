const instance = new vidbg('.vidbg-box', {
  mp4: 'videos/world.mp4', // URL or relative path to MP4 video
  webm: 'videos/world.webm', // URL or relative path to webm video
  poster: 'images/poster.jpg', // URL or relative path to fallback image
  overlay: false // Boolean to display the overlay or not
});
instance.resize();

const rellax = new Rellax('.rocket', {
  breakpoints: [900, 1200]
});
if (document.body.clientWidth < 768) {
  rellax.destroy();
}

AOS.init();