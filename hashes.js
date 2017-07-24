import sha1 from './node_modules/sha1/sha1.js';

export default class HashesController {
  constructor() {
    document.querySelector('.love').addEventListener('click', this.showSHA.bind(this));
    this.hashes = [];
  }

  clearHashes(event) {
    event.stopPropagation();
    this.hashes = [];
    document.querySelector('#hashes').innerHTML = '';
  }

  showSHA(event) {
    event.stopPropagation();
    document.querySelector('#content').innerHTML = `
    <div class="sha1">
      <ul>
        <li>Identical content => identical hash</li>
        <li>Different content => different hash</li>
        <li>Similar content => different hash</li>
      </ul>
      <div class="calculate-hash">
        <input type="text" id="plaintext" /><button id="sha1">Calculate SHA1</button>
      </div>
      <div id="hashes"></div>
      <button class="clear" id="clear-hashes">X</button>
    </div>`;

    document.querySelector('#plaintext').addEventListener('click', (event) => event.stopPropagation());
    document.querySelector('#sha1').addEventListener('click', this.calculateSHA.bind(this));
    document.querySelector('body').addEventListener('keypress', this.handleEnter.bind(this));
    document.querySelector('#clear-hashes').addEventListener('click', this.clearHashes.bind(this));
  }

  calculateSHA(event) {
    event.stopPropagation();
    const plaintext = document.querySelector('#plaintext');
    const hash = sha1(plaintext.value);
    this.hashes.push(hash);
    document.querySelector('#hashes').innerHTML = this.hashes.map(hash => `<div>${hash}</div>`).join('');
    plaintext.value = '';
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      this.calculateSHA(event);
    }
  }
}