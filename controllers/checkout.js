export default class Checkout {
  static getTemplate() {
    return `
    <div class="terminal">
      <div class="prompt">git checkout -b awesome-feature-branch</div>
      <div class="status">Switched to a new branch 'awesome-feature-branch'</div>
    </div>
    <img src="images/new-branch.png" />
    `;
  }
}