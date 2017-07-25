export default class RepoController {
  constructor() {
    const terminal = document.getElementById('terminal');
    terminal.contentEditable = true;
    terminal.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
}