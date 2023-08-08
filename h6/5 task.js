const circleElements = document.querySelectorAll('.circle');

circleElements.forEach(element => {
  const animValue = element.getAttribute('data-anim');
  element.classList.add(animValue);
});

circleElements.forEach(element => {
  const animValue = element.getAttribute('data-anim');
  console.log(`Animation applied: ${animValue}`);
});
