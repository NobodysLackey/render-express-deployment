let elements = ['install', 'run']
let copied = false
let out = true

const copy = (element) => {
  console.log('copying!')
  if (copied) {
    return
  }
  let shell = document.getElementById(element)
  let boxHidden = shell.querySelector('.copy')
  let boxImg = shell.querySelector('img')

  navigator.clipboard.writeText(shell.querySelector('code').innerText)

  copied = true

  boxImg.setAttribute('src', './public/images/check.png')

  setTimeout(() => {
    copied = false
    if (out) {
      boxHidden.style.opacity = 0
    }
    boxImg.setAttribute('src', './public/images/copy.png')
  }, 2000)
}

const hover = (element, action) => {
  let boxHidden = document.getElementById(element).querySelector('.copy')
  if (action === 'over') {
    out = false
    boxHidden.style.opacity = 1
  } else if (action === 'out' && !copied) {
    out = true
    boxHidden.style.opacity = 0
  } else if (action === 'out' && copied) {
    out = true
  }
}

elements.forEach((element) => {
  let el = document.querySelector(`#${element}`)
  el.addEventListener('mouseenter', () => hover(element, 'over'))
  el.addEventListener('mouseleave', () => hover(element, 'out'))
  let box = el.querySelector('.copy')
  box.addEventListener('click', () => copy(element))
})
