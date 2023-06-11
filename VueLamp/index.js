function update() {
    const rangeSlider = document.getElementById('range-slider');
    const light = document.getElementById('light');
    light.style.opacity = rangeSlider.value / 100;
    rangeSlider.style.backgroundSize = rangeSlider.value + "% 100%";
}

function switchOn() {
    const button = document.getElementById('button');
    const round = document.getElementById('round');
    button.classList.toggle('on-btn');
    round.classList.toggle('slider-on');
    const light = document.getElementById('light');
    // light.style.height = 0;
    // light.style.width = 0;
    // light.style.opacity = 0;
}