import NASAService from "./NASA-Service.js"

let nasaService = new NASAService

function drawPhotos(photo) {
    document.getElementById('photos').innerHTML = 
    
    `<div>
       <h4>${photo.date}</h4><br>
       <img src="${photo.url}"><br>
       <h4>${photo.title}</h4>
        </div>`
    }
    

export default class NASAController {
    constructor() {
        this.getPhotos()
    }
    getPhotos(e) {
        let date = ''
        if (e) {
            e.preventDefault();
            date = e.target.date.value
        }
        date = date || new Date(Date.now()).toISOString().split('T')[0]
        nasaService.getPhotos(date, drawPhotos)
    }
}