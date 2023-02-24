import { appButton } from '../../components/button'
import { appImg } from '../../components/img'
import { appSubTitle, appTitle } from '../../components/text'
import { insertAdjacentElement, insertAdjacentHTML } from '../../util/dom'
import selector from '../../util/dom/selector'
import { renderDobbyTutorial } from '../tutorial/tutorial'
import { DAILY_INFO } from './constant.js'

const infoBox = ({ gif, name }) => {
  const titleTag = `<strong>${name}</strong>`
  const imgBox = appImg(gif)
  const box = `<li class="tutorial-box">${imgBox}${titleTag}</li>`
  return box
}

export const renderDaily = () => {
  selector.body.innerHTML = ''
  const title = appTitle(DAILY_INFO.title)
  const subTitle = appSubTitle(DAILY_INFO.subTitle)

  const infoCardList = DAILY_INFO.challengeList.map((item, idx) => infoBox({ ...item, idx }))
  const list = `<ul class="tutorial-box-list">${infoCardList.join('')}</ul>`
  const startButton = appButton('Clap to START', renderDobbyTutorial)

  insertAdjacentHTML(selector.body, [title, subTitle, list])
  insertAdjacentElement(selector.body, startButton)
}

// date format yyyy-mm-dd
