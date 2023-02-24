export const insertAdjacentHTML = (target, domList) => {
  if (typeof domList === 'object') {
    domList.forEach((element) => {
      target.insertAdjacentHTML('beforeend', element)
    })
  } else target.insertAdjacentHTML('beforeend', domList)
}

export const insertAdjacentElement = (target, domList) => {
  if (Array.isArray(domList)) {
    domList.forEach((element) => {
      target.insertAdjacentElement('beforeend', element)
    })
  } else target.insertAdjacentElement('beforeend', domList)
}
