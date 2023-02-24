import { step } from '../../components/step.js'
import { appButton } from '../../components/button'
import { appImg } from '../../components/img'
import { appSubTitle, appTitle } from '../../components/text'
import { insertAdjacentElement, insertAdjacentHTML } from '../../util/dom'
import selector from '../../util/dom/selector.js'
import { renderBalloonTutorial } from '../tutorial/tutorial.js'

export const complete = (missionIdx, missionName, imgSrc) => {
  selector.body.innerHTML = ''

  const stepComp = step(missionIdx)
  const title = appTitle(`mission CLEAR`)
  const subTitle = appSubTitle(missionName)
  const completeImg = appImg(imgSrc)
  const nextButton = appButton('Clap to START', renderBalloonTutorial)
  const container = `<main class="complete-container">${stepComp}${title}${subTitle}${completeImg}</main>`
  insertAdjacentHTML(selector.body, container)
  insertAdjacentElement(selector.body, nextButton)
}
