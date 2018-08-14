import NASAService from "./NASA-Service.js"

let nasaService = new NASAService
let app = document.getElementById('app')

function draw(data) {
    console.log(data)
    app.innerHTML = `
    <div id="error"></div>

    <button onclick="app.controllers.nasa.getPhotos()">
    Get Photo
    </button>
    <br>
    <div id="photos">
    </div>
    <br>    
    
    `
}
function drawPhotos(data) {
    let photosElem = document.getElementById('photos')
    let template = ''
    data.forEach(photo => {
        template += `<div>
        ${photo.date}
        ${photo.explanation}
        </div>`
    })
    photosElem.innerHTML = template
}
export default class NASAController {
    constructor() {
        draw()
    }
    getPhotos() {
        nasaService.getPhotos(drawPhotos)
    }
}