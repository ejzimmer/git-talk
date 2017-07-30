export default class CheckoutController {

  constructor() {
    document.querySelectorAll('.commits > div')
      .forEach(div => div.addEventListener('click', this.highlight));

    this.terminal = document.getElementById('terminal');
    this.terminal.contentEditable = true;

    this.terminal.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    this.terminal.addEventListener('keypress', this.gitCheckout.bind(this));

  }

  highlight(event) {
    event.stopPropagation();
    this.classList.toggle('highlight');
  }

  gitCheckout(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.querySelector('.tag.head').remove();

      const head = document.createElement('div');
      head.classList.add('tag');
      head.classList.add('head');
      document.querySelector('.commits > div:nth-child(2)').prepend(head);
    }
  }

  static getTemplate() {
    return `
      <div id="terminal">&gt;&nbsp;</div>
      <div class="one-branch commits">
        <div><div class="tag head"></div>3a7a468</div>
        <div>4be1402</div>
        <div>88c1232</div>
        <div>8359ed6</div>
      </div>`;
  }
}