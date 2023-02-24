import * as Leap from 'leapjs'
import { appSubTitle, appTitle } from '../../components/text'
import { insertAdjacentElement, insertAdjacentHTML } from '../../util/dom'
import selector from '../../util/dom/selector.js'
import { formattedNumber, getRandomIntInclusive } from '../../util/number'
import { complete } from '../complete/complete'

export const renderClockProgress = (missionIdx) => {
  selector.body.innerHTML = ''
  const title = appTitle(`daily mission ${missionIdx}`)
  const subTitle = appSubTitle('TIME FLIES')
  insertAdjacentHTML(selector.body, [title, subTitle])

  // game space
  const gameSpace = document.createElement('section')
  gameSpace.classList.add('game-space')

  const clock = document.createElement('div')
  clock.classList.add('clock')
  const hourHand = document.createElement('div')
  hourHand.classList.add('hour-hand')
  const minuteHand = document.createElement('div')
  minuteHand.classList.add('minute-hand')
  insertAdjacentElement(clock, [hourHand, minuteHand])

  insertAdjacentElement(gameSpace, clock)
  insertAdjacentElement(selector.body, gameSpace)

  let cnt = 0
  let rotate = 0
  const controller = new Leap.Controller()
  controller.on('connect', function () {
    const intervalId = setInterval(function () {
      if (rotate === 360) {
        clearInterval(intervalId)
        complete(3, 'TIME FLIES', 'https://gram-img.s3.ap-northeast-2.amazonaws.com/dobby_clear2+1.png')
      }

      const frame = controller.frame()
      const previousFrame = controller.frame(30)

      if (frame.hands.length > 0) {
        const currFrame = frame.hands[0].roll()
        const prevFrame = previousFrame.hands[0].roll()
        const movement = formattedNumber(currFrame - prevFrame)

        if (movement > 10) {
          cnt++
          if (cnt % 3 === 0) {
            rotate += 36
            minuteHand.style.transform = `rotate(${rotate}deg)`
          }
        }
      }
    }, 100)
  })
  controller.connect()
}
