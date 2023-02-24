import { getRandomIntInclusive } from '../util/number.js'

export default function createSock() {
  const sockIdx = getRandomIntInclusive(1, 10)
  const sock = document.createElement('img')
  sock.src = `https://gram-img.s3.ap-northeast-2.amazonaws.com/sock${sockIdx}.png`
  sock.classList.add('sock')

  const getTranslateX = getRandomIntInclusive(0, 1100)
  const getTranslateY = getRandomIntInclusive(-50, 350)
  sock.style.transform = `translate(${getTranslateX}px, ${getTranslateY}px)`

  return sock
}
