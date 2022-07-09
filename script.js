//Smooth Scrolling
const btnScrollTo = document.querySelectorAll('.btn-scroll-to');
const btnExplore = document.querySelectorAll('.btn-explore');
const ctaSection = document.querySelector('#cta');
const featureSection = document.querySelector('#feature');
const btnSubmit = document.querySelector('.btn-submit');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputTelephone = document.querySelector('#telephone');
const inputAmount = document.querySelector('#amount');

btnScrollTo.forEach((e) => {
  e.addEventListener('click', function () {
    ctaSection.scrollIntoView({ behavior: 'smooth' });
  });
});
btnExplore.forEach((e) => {
  e.addEventListener('click', function () {
    featureSection.scrollIntoView({ behavior: 'smooth' });
  });
});
btnSubmit.addEventListener('click', function () {
  inputName.value =
    inputEmail.value =
    inputTelephone.value =
    inputAmount.value =
      '';
});

// Reveal Section
const allSections = document.querySelectorAll('.sections');
const revealSection = function (entires, observer) {
  const [entry] = entires;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
