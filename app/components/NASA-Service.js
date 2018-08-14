import Photo from "../models/Photo.js"


const apiKey = 'IKGnf8cxgG9RVphmNqjal4DAJg7hjtbH2aC30ScI'
const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key='
export default class NASAService {
    getPhotos(date, draw){
    console.log("hello from NASAService")
    fetch(apodUrl + apiKey + '&date=' +date)
    .then(res => res.json())
    .then(data => {
        draw(new Photo(data))
            
        })
    
    }
}

