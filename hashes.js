export default class HashesController {
  constructor() {
    document.querySelector('.love').addEventListener('click', this.showSHA.bind(this));
  }

  showSHA(event) {
    console.log('love event captured');
    event.stopPropagation();
    document.querySelector('#content').innerHTML = `
    <ul>
      <li>Identical content => identical hash</li>
      <li>Different content => different hash</li>
      <li>Similar content => different hash</li>
    </ul>`
  }
}