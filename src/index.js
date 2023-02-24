// import * as Leap from 'leapjs'
import './styles/style.css'
import { renderDaily } from './views/daily/daily'
import './views/tutorial/tutorial.js'

// const body = document.querySelector('body')
// const testShape = document.createElement('div')
// testShape.classList.add('testShape')
// body.insertAdjacentElement('afterbegin', testShape)

// Leap.loop((frame) => {
//   // 2 부터 -10까지
//   //   const { fingers, hands, handsMap, pointables, pointablesMap } = frame

//   frame.hands.forEach((hand, index) => {
//     testShape.style.transform = `rotate(${-hand.roll()}rad)`

//     // testShape.style.transform = `rotate(${hand.roll()}turn)`
//     // const [a, b, c] = hand.arm.basis
//   })
// }).use('screenPosition', { scale: 0.25 })

// // 아무짓도 안했으면 alert
// // 이름

renderDaily()
