document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded');
    
    // smooth scrooll
    document.documentElement.style.scrollBehavior = 'smooth';

});


/* make videos clickable */ 
document.querySelectorAll('.project-images').forEach(project => {
  project.addEventListener('click', () => {
    window.open(project.dataset.link, '_blank', 'noopener');
  });
});
