const landingButton = document.getElementById('landing-button');
const aboutButton = document.getElementById('about-button');

const landingButtonCallback = () => {
    const newEl = document.createElement('p');
    newEl.textContent = 'We created a paragraph element for you that wasn\'t here before';
    newEl.style.fontFamily = 'Arial';
    newEl.style.fontWeight = 'Bold';
    landingButton.parentElement.append(newEl);
};

const aboutButtonCallback = () => {
    const animation = {opacity: 0};
    const animationTiming = {
        duration: 2000,
        iterations: 1,
      };
    aboutButton.textContent = 'You clicked me';

    aboutButton.animate(animation, animationTiming);
}

if (landingButton) {
    landingButton.addEventListener('click', landingButtonCallback)
}

if (aboutButton) {
    aboutButton.addEventListener('click', aboutButtonCallback);
}