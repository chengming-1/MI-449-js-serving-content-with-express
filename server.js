const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.set('view engine', 'ejs')
app.use(express.static('public'))
const articles = {}

function createArticle (article) {
  const id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}
createArticle({
  title: 'Harry Potter and the Philosopher\'s Stone',
  simple: 'PhilosopherStone',
  content: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling.',
  image: '/img/1.jpg',
  wikiIntro: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone'
})
createArticle({
  title: 'Harry Potter and the Goblet of Fire',
  simple: 'GobletOfFire',
  content: ' It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry\'s name into the Triwizard Tournament, in which he is forced to compete.',
  image: '/img/2.png',
  wikiIntro: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire'
})
createArticle({
  title: 'Harry Potter and the Deathly Hallows',
  simple: 'DeathlyHallows',
  content: 'The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.',
  image: '/img/3.jpg',
  wikiIntro: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows'
})

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})
app.get('/PhilosopherStone', function (request, response) {
  response.render('pages/intro', {
    articles: articles,
    book: articles[0]
  })
})

app.get('/GobletOfFire', function (request, response) {
  response.render('pages/intro', {
    articles: articles,
    book: articles[1]
  })
})

app.get('/DeathlyHallows', function (request, response) {
  response.render('pages/intro', {
    articles: articles,
    book: articles[2]
  })
})
app.listen(port)
