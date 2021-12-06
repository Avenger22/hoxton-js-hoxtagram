// write your code here

const sectionPostEl = document.querySelector('section.image-container')

const state = {
    images: [],
    comments: []
}

//SERVER FUNCTIONS
// getImagesDataFromServer :: () => Promise<todos: array>
function getImagesDataFromServer() {

    return fetch('http://localhost:3000/images').then(function (response) 
    {
        return response.json()
    })

}

// getCommentsDataFromServer :: () => Promise<todos: array>
function getCommentsDataFromServer() {

    return fetch('http://localhost:3000/comments').then(function (response) 
    {
        return response.json()
    })

}

function renderPost(ImagesParam, commentsParam) {

    //we destroy everything then recreate each time it renders the page and state changes
    sectionPostEl.innerHTML = ''

    //recreate
    // for (const element of )

}

function renderPostItem(postParam) {

    //we create the post card by js from template
    const articleEl = document.createElement('article')
    articleEl.setAttribute('class', 'image-card')

    const h2El = document.createElement('h2')
    h2El.setAttribute('class', 'title')
    h2El.textContent = 'The title to be replaced'

    const imgEl = document.createElement('img')
    imgEl.setAttribute('class', 'image')
    imgEl.setAttribute('src', './assets/image-placeholder.jpg')

    const divEl = document.createElement('div')
    divEl.setAttribute('class', 'likes-section')

    const spanEl = document.createElement('span')
    spanEl.setAttribute('class', 'likes')
    spanEl.textContent = '0 likes'

    const btnEl = document.createElement('button')
    btnEl.setAttribute('class', 'like-button')
    btnEl.textContent = '♥'

    const ulEl = document.createElement('ul')
    ulEl.setAttribute('class', 'comments')

    const liEl1 = document.createElement('li')
    liEl1.textContent = 'Get rid of these'

    const liEl2 = document.createElement('li')
    liEl2.textContent = 'Get rid of these'

    const liEl3 = document.createElement('li')
    liEl3.textContent = 'Get rid of these'

    //appending things
    divEl.append(spanEl, btnEl)
    ulEl.append(liEl1, liEl2, liEl3)
    articleEl.append(h2El, imgEl, divEl, ulEl)
    sectionPostEl.append(articleEl)

}

function render() {
    console.log('rendering with state:', state)
}

getImagesDataFromServer().then(function (imagesFromServer) {
    state.images = imagesFromServer
    render()
})

getImagesDataFromServer().then(function (commentsFromServer) {
    state.comments = commentsFromServer
    render()
})

// This happens before the fetch is done and fetch requeires some ms to load the data
renderPostItem()