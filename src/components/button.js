export const appButton = (text, callback) => {
  const button = document.createElement('button')
  button.innerText = text
  button.classList.add('app-button')
  // button.addEventListener('click', callback)

  // new Recording((data) => {
  //   if (detectClap(data)) {
  //     callback()
  //     console.log('first')
  //   }
  // })

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      callback()
    }
  })
  return button
}
