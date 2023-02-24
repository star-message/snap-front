export const step = (curr) => {
  const isToggleClass = (idx) => (idx === curr ? 'step-on' : '')

  const template = `
    <div class="step-container">
        <div class="step ${isToggleClass(1)}"></div>
        <div class="step-hr"></div>
        <div class="step ${isToggleClass(2)}"></div>
        <div class="step-hr"></div>
        <div class="step ${isToggleClass(3)}"></div>
    </div>
  `

  return template
}
