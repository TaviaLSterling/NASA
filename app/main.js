import NASAController from './components/NASA-Controller.js'

class App {
  constructor() {
    this.controllers = {
      nasa: new NASAController
    }
  }
}

const app = new App()
window.app = app