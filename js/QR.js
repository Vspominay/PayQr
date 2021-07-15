function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('_active');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('._anim-items');
  for (let elm of elements) {
    observer.observe(elm);
  }

  // ======================
// burge

const closeButton = document.querySelector(".closeM");
const byrgermenu = document.querySelector(".hidenMenu");
const openmenu = document.querySelector(".menu-btn");

closeButton.addEventListener("click",function (){
  byrgermenu.classList.add("hideShow")
  openmenu.style.opacity = 1;

} )
openmenu.addEventListener("click",function(){
  byrgermenu.classList.remove("hideShow")
  openmenu.style.opacity = 0;
})