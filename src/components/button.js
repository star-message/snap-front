export const appButton = (text, callback) => {
  const button = document.createElement('button')
  button.innerText = text
  button.classList.add('app-button')
  button.addEventListener('click', callback)
  return button
}
