import Terminal from '../terminal';

export default class ResetController {
  constructor() {
    this.keyEvents = {};
    this.terminal = new Terminal(this.keyEvents);
  }

  static getTemplate() {
    return `<div class="terminal"></div>`;
  }
}