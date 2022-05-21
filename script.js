const head = document.querySelector('header')
const main = document.querySelector('main')
const foot = document.querySelector('footer')

const Jurl = ''
const request = new XMLHttpRequest()

request.open('GET', Jurl)
request.responseType = 'json'
request.send()
request.onload = function() {
    const pokedex = request.response;
    populateHeader(pokedex);
    showHeroes(pokedex);
  }
