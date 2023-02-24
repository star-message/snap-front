import * as Leap from 'leapjs'
import { appSubTitle, appTitle } from '../../components/text'
import { insertAdjacentElement, insertAdjacentHTML } from '../../util/dom'
import selector from '../../util/dom/selector.js'
import createSock from '../../components/sock'
import { formattedNumber, getRandomIntInclusive } from '../../util/number'
import { complete } from '../complete/complete'
import { state } from '../../store/state'

export const renderDobbyProgress = (missionIdx) => {
  state.audio = false

  selector.body.innerHTML = ''
  const title = appTitle(`daily mission ${missionIdx}`)
  const subTitle = appSubTitle('FREE DOBBY')
  const dobbyTitle = `<strong class="dobby-title">DOBBY IS FREE</strong>`

  // game space
  const gameSpace = document.createElement('section')
  gameSpace.classList.add('game-space')

  const sockCnt = 12
  const sockArray = Array.from({ length: sockCnt }, createSock)
  insertAdjacentElement(gameSpace, sockArray)

  insertAdjacentHTML(selector.body, [title, subTitle, dobbyTitle])
  insertAdjacentElement(selector.body, gameSpace)

  let cnt = 0
  const controller = new Leap.Controller()
  controller.on('connect', function () {
    const intervalId = setInterval(function () {
      const { length } = sockArray

      if (length === 0) {
        clearInterval(intervalId)
        complete(1, 'FREE DOBBY', 'https://gram-img.s3.ap-northeast-2.amazonaws.com/dobby_clear2+1.png')
      }

      const frame = controller.frame()
      const previousFrame = controller.frame(30)

      if (frame.hands.length > 0) {
        const currFrame = frame.hands[0].roll()
        const prevFrame = previousFrame.hands[0].roll()
        const movement = formattedNumber(currFrame - prevFrame)

        console.log(movement)

        if (movement > 2) {
          cnt++
          if (cnt % 3 === 0) {
            const { length } = sockArray
            const randomIdx = getRandomIntInclusive(0, length - 1)
            sockArray[randomIdx].remove()
            sockArray.splice(randomIdx, 1)
          }
        }
      }
    }, 100)
  })
  controller.connect()
}
