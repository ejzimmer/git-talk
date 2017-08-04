import sha1 from '../node_modules/sha1/sha1.js';

export default class SHA1Controller {

  constructor() {
    this.hashes = [];

    this.boundHandleEnter = this.handleEnter.bind(this);

    document.querySelector('#plaintext').addEventListener('click', (event) => event.stopPropagation());
    document.querySelector('#sha1').addEventListener('click', this.calculateSHA.bind(this));
    document.querySelector('body').addEventListener('keypress', this.boundHandleEnter);
    document.querySelector('#clear-listener').addEventListener('click', this.clearHashes.bind(this));

  }

  calculateSHA(event) {
    event.stopPropagation();
    const plaintext = document.querySelector('#plaintext');
    const hash = sha1(plaintext.value);
    this.hashes.push(hash);
    document.querySelector('#hashes').innerHTML += this.showHash(hash);

    if (this.hashes.length > 1) {
      this.colourHashes();
    }
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      this.calculateSHA(event);
    }
  }

  showHash(hash) {
    const hashArray = hash.split('');
    return `<div>
      ${hashArray.map(char => `<span>${char}</span>`).reduce((string, span) => string += span, '')}
      </div>`;
  }

  colourHashes() {
    const hashesDiv = document.querySelectorAll('#hashes div');
    const spanLists = [];

    hashesDiv.forEach(div => {
      spanLists.push(div.querySelectorAll('span'));
    });

    spanLists[0].forEach((span, index) => {
      const equal = spanLists.every(spanList => spanList[index].innerHTML === spanLists[0][index].innerHTML);
      if (equal) {
        spanLists.forEach(spanList => {
          spanList[index].classList.add('same');
        })
      } else {
        spanLists.forEach(spanList => {
          spanList[index].classList.remove('same');
        })
      }
    })
  }
  
  clearHashes(event) {
    document.querySelector('body').removeEventListener('keypress', this.boundHandleEnter);
  }

  static getTemplate() {
    return `
    <div class="sha1">
      <ul>
        <li><span>same content</span><span class="arrow"></span><span>same hash</span></li>
        <li><span>different content</span><span class="arrow"></span><span>different hash</span></li>
        <li><span>similar content</span><span class="arrow"></span><span>different hash</span></li>
      </ul>
      <div class="calculate-hash">
        <input type="text" id="plaintext" /><button id="sha1">Calculate SHA1</button>
      </div>
      <div id="hashes"></div>
      <button class="clear" id="clear-listener">X</button>
    </div>`;
  }
}