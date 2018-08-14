import NASA-Controller from './components/NASA-controller.js'

class App {
  constructor() {
    this.controllers = {
      nasa: new NASAController
    }
  }
}

const app = new App()
window.app = app