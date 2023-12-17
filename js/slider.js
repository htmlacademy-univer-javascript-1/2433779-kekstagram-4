import {EFFECTS} from './const.js';

const imagePreview = document.querySelector('.img-upload__preview').children[0];
const imageEffect = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = document.querySelector('.effect-level__slider');
const effects = document.querySelectorAll('.effects__radio');
let selectedEffect = EFFECTS[0];

const updateSlider = (value) => {
  slider.noUiSlider.updateOptions({
    range: {
      min: value.min,
      max: value.max
    },
    start: value.max,
    step: value.step,
  });
};

const updateEffects = (totalEffect) => {
  EFFECTS.forEach((effect) => {
    if (effect.name === totalEffect.value) {
      selectedEffect = effect;
      updateSlider(effect);
      imagePreview.className = `effect__preview--${effect.name}`;
      if (effect === EFFECTS[0]) {
        sliderContainer.classList.add('hidden');
        imagePreview.style = totalEffect.style;
      } else {
        sliderContainer.classList.remove('hidden');
        imagePreview.style.filter = `${effect.style}(${effect.max}${effect.unit})`;
      }
    }
  });
};

const updateEffectSaturation = () => {
  const sliderValue = slider.noUiSlider.get();
  imagePreview.style.filter = `${selectedEffect.style}(${sliderValue}${selectedEffect.unit})`;
  imageEffect.value = sliderValue;
};

const resetEffects = () => {
  updateEffects(effects[0]);
};

effects.forEach((effect) => {
  effect.addEventListener('change', () => {
    updateEffects(effect);
  });
});

noUiSlider.create(slider, {
  range: {
    min: EFFECTS[0].min,
    max: EFFECTS[0].max
  },
  start: EFFECTS[0].max,
  step: EFFECTS[0].step,
  connect: 'lower'
});

slider.noUiSlider.on('update', updateEffectSaturation);

export {resetEffects};
