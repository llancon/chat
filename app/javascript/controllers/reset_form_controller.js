import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  reset_line() {
    this.element.reset()
  }
}