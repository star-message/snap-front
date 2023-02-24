import { appSubTitle, appTitle } from '../../components/text'
import { insertAdjacentElement, insertAdjacentHTML } from '../../util/dom'
import selector from '../../util/dom/selector.js'
import createSock from '../../components/sock'
import { getRandomIntInclusive } from '../../util/number'
import { complete } from '../complete/complete'

export const renderDobbyProgress = (missionIdx) => {
  selector.body.innerHTML = ''
  const title = appTitle(`daily mission ${missionIdx}`)
  const subTitle = appSubTitle('FREE DOBBY')
  const dobbyTitle = `<strong class="dobby-title">DOBBY IS FREE</strong>`

  // game space
  const gameSpace = document.createElement('section')
  gameSpace.classList.add('game-space')

  const sockCnt = 15
  const sockArray = Array.from({ length: sockCnt }, createSock)
  insertAdjacentElement(gameSpace, sockArray)

  // TODO leap motion 로직으로 교체 필요
  window.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
      const { length } = sockArray
      const randomIdx = getRandomIntInclusive(0, length - 1)
      sockArray[randomIdx].remove()
      sockArray.splice(randomIdx, 1)
    }
  })

  insertAdjacentHTML(selector.body, [title, subTitle, dobbyTitle])
  insertAdjacentElement(selector.body, gameSpace)

  const domObserver = new MutationObserver(() => {
    const { length } = sockArray
    if (length === 0) return complete(1, 'FREE DOBBY', 'https://www.easygifanimator.net/images/samples/eglite.gif')
    else return
  })

  domObserver.observe(gameSpace, { childList: true, subtree: false })
}
