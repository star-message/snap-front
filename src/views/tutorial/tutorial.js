import { appSubTitle, appTitle } from '../../components/text'
import { insertAdjacentElement, insertAdjacentHTML } from '../../util/dom'
import selector from '../../util/dom/selector.js'
import { BALLON_CHALLENGE, DOBBY_CHALLENGE } from './constant.js'
import { appButton } from '../../components/button'
import { renderDobbyProgress } from '../progress/dobby.js'
import { appImg } from '../../components/img'
import { renderBallonProgress } from '../progress/balloon'
import { state } from '../../store/state'

const tutorialBox = ({ gifSrc, title, description, idx }) => {
  const gif = appImg(gifSrc)
  const titleTag = `<strong>${title}</strong>`
  const descTag = `<p>${description}</p>`
  const indexNumber = `<span>${idx + 1}</span>`
  const box = `<li class="tutorial-box">${gif}${titleTag}${descTag}${indexNumber}</li>`
  return box
}

export const renderDobbyTutorial = () => {
  state.audio = true
  selector.body.innerHTML = ''
  const title = appTitle('mission 1')
  const subTitle = appSubTitle('FREE DOBBY')
  const startButton = appButton('Clap to START', () => renderDobbyProgress(1))
  const dobbyList = DOBBY_CHALLENGE.map((item, idx) => tutorialBox({ ...item, idx }))
  const list = `<ul class="tutorial-box-list">${dobbyList.join('')}</ul>`
  insertAdjacentHTML(selector.body, [title, subTitle, list])
  insertAdjacentElement(selector.body, startButton)
}

export const renderBalloonTutorial = () => {
  selector.body.innerHTML = ''
  const title = appTitle('mission 2')
  const subTitle = appSubTitle('BALLON')
  const startButton = appButton('Clap to START', () => renderBallonProgress(2))
  const ballonList = BALLON_CHALLENGE.map((item, idx) => tutorialBox({ ...item, idx }))
  const list = `<ul class="tutorial-box-list">${ballonList.join('')}</ul>`
  insertAdjacentHTML(selector.body, [title, subTitle, list])
  insertAdjacentElement(selector.body, startButton)
}
