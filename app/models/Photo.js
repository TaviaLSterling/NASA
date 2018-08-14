export default class Photo {
    constructor(reqData) {
        this.copyright = reqData.copyright
        this.date = reqData.date
        this.explanation = reqData.explanation
        this.title = reqData.title
        this.url = reqData.url
        this.id = reqData.url
    }
}