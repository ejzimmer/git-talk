export default class MergeController {
  static getTemplate() {
    return `
    <div class="merge">
      <div class="commit reverse-commit"></div><div class="commit"></div>
      <div class="commit"></div><div class="commit"></div>
      <div class="commit"></div><div class="commit"></div>
      <div class="commit"></div><div class="commit"></div>
      <div class="commit"></div><div class="commit"></div>
      <div class="commit"></div><div></div>
    </div>`;
  }
}