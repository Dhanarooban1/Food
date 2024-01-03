
document.getElementById('ScrollBtn').addEventListener('click', function() {
  smoothScrollTo(document.body.scrollHeight, 1500);
});

function smoothScrollTo(target, duration) {
  var start = window.pageYOffset;
  var change = target - start;
  var startTime = performance.now();

  function animateScroll(currentTime) {
      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + change * progress);
      if (progress < 1) {
          requestAnimationFrame(animateScroll);
      }
  }

  requestAnimationFrame(animateScroll);
}


document.getElementById('randomMealSection').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action
  smoothScrollTo(document.body.scrollHeight, 1500);
});


document.getElementById('ScrollBtn').addEventListener('click', function() {
  smoothScrollTo(window.pageYOffset + window.innerHeight, 1500);
});


document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('content').style.display = 'none';
 });



 
 document.getElementById("ScrollBtn").addEventListener("click", function() {
  window.scrollBy(0, 50); // Scroll down 50px
});
