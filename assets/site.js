// Learning Roots Royal Academy — shared site behaviour
function toggleNav(){document.getElementById('mobileNav').classList.toggle('open')}

// Scroll-reveal is a progressive enhancement: content is visible by default in the CSS,
// and only hidden-then-faded-in once we're sure this browser can actually run the reveal.
(function(){
  var targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!targets.length) return;
  function each(list, fn){ for (var i=0;i<list.length;i++) fn(list[i]); }

  var supportsObserver = 'IntersectionObserver' in window;
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!supportsObserver || reducedMotion) return; // leave content plainly visible

  document.documentElement.classList.add('js-anim');

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  each(targets, function(t){ io.observe(t); });

  // Hard safety net: whatever happens with the observer, never leave real content invisible.
  setTimeout(function(){
    each(targets, function(t){ t.classList.add('in'); });
  }, 2000);
})();

// Install this site as a web app: register the service worker for offline shell + installability.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').catch(function(){ /* ignore on file:// preview */ });
  });
}
