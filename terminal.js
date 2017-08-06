export default class Terminal {
  constructor(keyEvents) {
    this.terminal = document.querySelector('.terminal');
    this.terminal.addEventListener('click', event => event.stopPropagation());

    this.keyEvents = keyEvents;
    
    this.showPrompt();
  }

  showPrompt() {
    const prompt = document.createElement('div');
    prompt.classList.add('prompt');
    prompt.contentEditable = true;
    prompt.addEventListener('keypress', this.handleKeyPress.bind(this)); 
    
    this.terminal.appendChild(prompt);
    prompt.focus();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const action = event.target.innerHTML;

      if (typeof this.keyEvents[action] === 'function') {
        this.keyEvents[action]();
        return;
      }
      
      const actionWithoutArg = Object.keys(this.keyEvents).find(key => action.includes(key));
      if (typeof this.keyEvents[actionWithoutArg] === 'function') {
        const arg = action.replace(actionWithoutArg, '').replace(' ', '');
        this.keyEvents[actionWithoutArg](arg);
      }
    }
  }


  echo(contents) {
    const responseElement = document.createElement('pre');
    responseElement.classList.add('response');
    responseElement.innerHTML = contents;

    this.terminal.appendChild(responseElement);
    this.showPrompt();
  }
}