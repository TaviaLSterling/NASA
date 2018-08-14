import Photo from "../models/Photo.js"

let photos = {}

export default class NASAService {
    getPhotos(draw){
    console.log("hello from NASAService")
    fetch('https://api.nasa.gov/planetary/apod?api_key=IKGnf8cxgG9RVphmNqjal4DAJg7hjtbH2aC30ScI')
    .then(res => res.json())
    .then(res => {
        let myPhotos = res.results.map(rawPhoto => {
            let photo = new Photo(rawPhoto)
            photos[photo.id] = photo
            return photo
        })
        draw(myPhotos)
    })
}
}