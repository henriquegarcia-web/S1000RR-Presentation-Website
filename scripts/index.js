(async function init () {
  // await Promise.all([])

  new HoverCardColor().start()
  new StartEngineSound().start()
})()

function HoverCardColor() {
  const cardImageColors = document.querySelectorAll('.color-banner__content__card__content img')

  this.start = () => {
    cardImageColors.forEach(img => img.addEventListener('mouseover', (ele) => {
      const cardColorName = (ele.path[1]).querySelector('.color-banner__content__card__content__title')
  
      cardColorName.style.opacity = "1"
    }))
  
    cardImageColors.forEach(img => img.addEventListener('mouseout', (ele) => {
      const cardColorName = (ele.path[1]).querySelector('.color-banner__content__card__content__title')
  
      cardColorName.style.opacity = "0"
    }))
  }
}

function StartEngineSound() {
  const startEngineSoundButton = document.getElementById('start_engine_sound')
  const startEngineSoundButtonText = startEngineSoundButton.querySelector('p')
  const engineSound = document.getElementById('engine_sound')
  
  this.start = () => {
    startEngineSoundButton.addEventListener('click', (ele) => {
      if (startEngineSoundButton.classList.contains('desactive')) {
        startEngineSoundButton.classList.remove('desactive')
        startEngineSoundButton.classList.add('active')
        startEngineSoundButtonText.textContent = "Desligar o motor"
        engineSound.play()
      } else {
        startEngineSoundButton.classList.remove('active')
        startEngineSoundButton.classList.add('desactive')
        startEngineSoundButtonText.textContent = "Ligar o motor"
        engineSound.pause()
      }
    })
    
    engineSound.addEventListener('ended', () => {
      startEngineSoundButtonText.textContent = "Ligar o motor"
    })
  }
}

const imageHighlight = document.querySelectorAll('.highlights-banner__caroussel__image')

imageHighlight.forEach(img => img.addEventListener('mouseover', () => {
  const imageHighlightDescription = img.querySelector('.highlights-banner__caroussel__image--description')

  imageHighlightDescription.style.opacity = "1"
}))

imageHighlight.forEach(img => img.addEventListener('mouseout', () => {
  const imageHighlightDescription = img.querySelector('.highlights-banner__caroussel__image--description')

  imageHighlightDescription.style.opacity = "0"
}))

// e.preventDefault();