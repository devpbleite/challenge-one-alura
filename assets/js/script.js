function encode() {
  let decodedMessage = document.getElementById('encode-text').value
  if (decodedMessage.length > 0) {
    document.querySelector('.not-find').style.display = 'none'
    document.querySelector('.encoded-box').style.display = 'flex'
  } else {
    document.querySelector('.not-find').style.display = 'block'
    document.querySelector('.encoded-box').style.display = 'none'
  }

  let encodeMessage = decodedMessage
    .replace(/e/gim, 'enter')
    .replace(/i/gim, 'imes')
    .replace(/a/gim, 'ai')
    .replace(/o/gim, 'ober')
    .replace(/u/gim, 'ufat')

  document.querySelector('.encoded-text').innerHTML = encodeMessage
}

function copy() {
  let encodedMessage = document.querySelector('.encoded-text').value
  navigator.clipboard.writeText(encodedMessage)
}

function decode() {
  let encodedMessage = document.getElementById('encode-text').value
  if (encodedMessage.length > 0) {
    document.querySelector('.not-find').style.display = 'none'
    document.querySelector('.encoded-box').style.display = 'flex'
  } else {
    document.querySelector('.not-find').style.display = 'block'
    document.querySelector('.encoded-box').style.display = 'none'
  }

  let decodedMessage = encodedMessage
    .replace(/enter/gim, 'e')
    .replace(/imes/gim, 'i')
    .replace(/ai/gim, 'a')
    .replace(/ober/gim, 'o')
    .replace(/ufat/gim, 'u')

  document.querySelector('.encoded-text').innerHTML = decodedMessage
}

function limpar() {
  let encodedMessage = document.getElementById('encode-text').value
  if (encodedMessage.length > 0) {
    document.querySelector('.not-find').style.display = 'block'
    document.querySelector('.encoded-box').style.display = 'none'
    document.querySelector('#encode-text').value = ''
    document.querySelector('#encode-text').focus()
  }
}
