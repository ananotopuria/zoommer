let lastScrollTop = 0; 

export function makeSticky(stickySelector) {
  const stickyElement = document.querySelector(stickySelector);
  const body = document.body;

  const stickyHeight = stickyElement.offsetHeight;

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      if (ent.isIntersecting === false) {
        body.classList.add('sticky');
        stickyElement.classList.add('sticky');
        body.style.marginTop = `${stickyHeight}px`; 
      } else {
        body.classList.remove('sticky');
        stickyElement.classList.remove('sticky');
        body.style.marginTop = `0`; 
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: `-80px`, 
    }
  );

  obs.observe(stickyElement);

  window.addEventListener('scroll', function () {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      stickyElement.classList.remove('sticky'); 
    } else {
      stickyElement.classList.add('sticky'); 
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
  });
}
