import { appSubTitle, appTitle } from '../../components/text'
import { insertAdjacentElement, insertAdjacentHTML } from '../../util/dom'
import selector from '../../util/dom/selector.js'
import createSock from '../../components/sock'
import { getRandomIntInclusive } from '../../util/number'
import { complete } from '../complete/complete'

export const renderBallonProgress = (missionIdx) => {
  selector.body.innerHTML = ''
  const title = appTitle(`daily mission ${missionIdx}`)
  const subTitle = appSubTitle('BALLON')

  // game space
  const gameSpace = document.createElement('section')
  gameSpace.classList.add('game-space')

  let dropSize = 100
  const drop = document.createElement('div')
  drop.classList.add('drop')
  drop.style.width = `${dropSize}px`
  drop.style.height = `${dropSize}px`

  insertAdjacentElement(gameSpace, drop)

  // TODO leap motion 로직으로 교체 필요
  window.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
      dropSize += 40
      drop.style.width = `${dropSize}px`
      drop.style.height = `${dropSize}px`
      if (dropSize === 500) return complete(2, 'BALLON', 'https://www.easygifanimator.net/images/samples/eglite.gif')
    }
  })

  insertAdjacentHTML(selector.body, [title, subTitle])
  insertAdjacentElement(selector.body, gameSpace)
}
