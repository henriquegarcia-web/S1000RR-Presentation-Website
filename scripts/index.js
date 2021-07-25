(async function init () {
  // await Promise.all([])

  new HoverCardColor().start()
  new StartEngine().start()
})()

function HoverCardColor() {
  const cardImageColors = document.querySelectorAll('.color-banner__content__card__content img')

  this.start = () => {
    cardImageColors.forEach(img => img.addEventListener('mouseover', (ele) => {
      const imgParent = ele.path[1]
      const cardColorName = imgParent.querySelector('.color-banner__content__card__content__title')
  
      cardColorName.style.opacity = "1"
    }))
  
    cardImageColors.forEach(img => img.addEventListener('mouseout', (ele) => {
      const imgParent = ele.path[1]
      const cardColorName = imgParent.querySelector('.color-banner__content__card__content__title')
  
      cardColorName.style.opacity = "0"
    }))
  }
}

function StartEngine() {
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