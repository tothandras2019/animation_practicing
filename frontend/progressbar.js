import { cardItemElement, initHTMLElements } from './progressbarItems.js'

function Init() {
  const root = document.getElementById('root')
  root.innerHTML = initHTMLElements()
  const element = [
    ['HTML', 'purple'],
    ['JAVASCRIPT', 'blue'],
    ['CSS', 'green'],
  ]

  const pageContent = element.reduce((cont, [name, color]) => {
    return (cont += cardItemElement(name, color))
  }, '')

  const cardsContainer = document.querySelector('.cards-container')

  cardsContainer.insertAdjacentHTML('afterbegin', pageContent)
  SetCardItems(root)
}
Init()

function SetCardItems(root) {
  const cardItemsElements = root.querySelectorAll('.card-items')
  cardItemsElements.forEach((cardItemsElement) => {
    let timeID = null
    eventSubscritions(cardItemsElement, timeID)
  })
}

function eventSubscritions(subscribedElement, timeID) {
  subscribedElement.addEventListener(`mouseenter`, (event) => {
    const button = subscribedElement.querySelector('button')
    button.classList.remove('inactivate')
    clearInterval(timeID)

    setProgressBarStrokeFill()
  })

  subscribedElement.addEventListener(`mouseleave`, (event) => {
    const button = subscribedElement.querySelector('button')
    button.classList.add('inactivate')
  })

  const progressItemsElement = subscribedElement.querySelector('.progress-svg-item')
  const progressBar = progressItemsElement.querySelector('.progress-bar')

  const setProgressBarStrokeFill = () => {
    timeID = setInterval(() => {
      let progressBarStrokeDashoffset = progressBar.getAttribute('stroke-dashoffset')
      progressBarStrokeDashoffset -= -1
      if (progressBarStrokeDashoffset === 2 * 510) progressBarStrokeDashoffset = 0
      progressBar.setAttribute('stroke-dashoffset', progressBarStrokeDashoffset)
    }, 10)
  }
}
