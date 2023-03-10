import * as Leap from 'leapjs'
import { appSubTitle, appTitle } from '../../components/text'
import { insertAdjacentElement, insertAdjacentHTML } from '../../util/dom'
import selector from '../../util/dom/selector.js'
import createSock from '../../components/sock'
import { formattedNumber, getRandomIntInclusive } from '../../util/number'
import { complete } from '../complete/complete'

export const renderBallonProgress = (missionIdx) => {
  selector.body.innerHTML = ''
  const title = appTitle(`daily mission ${missionIdx}`)
  const subTitle = appSubTitle('BALLON')

  // game space
  const gameSpace = document.createElement('section')
  gameSpace.classList.add('game-space')
  gameSpace.style.display = 'flex'
  gameSpace.style.justifyContent = 'center'
  gameSpace.style.alignItems = 'center'

  let dropSize = 100
  const drop = document.createElement('div')
  drop.classList.add('drop')
  drop.style.width = `${dropSize}px`
  drop.style.height = `${dropSize}px`

  insertAdjacentElement(gameSpace, drop)

  let cnt = 0
  const controller = new Leap.Controller()
  controller.on('connect', function () {
    const intervalId = setInterval(function () {
      if (dropSize === 500) {
        clearInterval(intervalId)
        return complete(2, 'BALLON', 'https://www.easygifanimator.net/images/samples/eglite.gif')
      }

      const frame = controller.frame()
      const previousFrame = controller.frame(30)
      if (frame.hands.length > 0) {
        const currFrame = frame.hands[0].roll()
        const prevFrame = previousFrame.hands[0].roll()
        const movement = formattedNumber(currFrame - prevFrame)

        if (movement > 3) {
          cnt++
          if (cnt % 3 === 0) {
            dropSize += 40
            drop.style.width = `${dropSize}px`
            drop.style.height = `${dropSize}px`
          }
        }
      }
    }, 100)
  })
  controller.connect()

  insertAdjacentHTML(selector.body, [title, subTitle])
  insertAdjacentElement(selector.body, gameSpace)
}
