export default class Stripper
{
   constructor() {
      this._target = document.createElement("div")
   }
   strip(html) {
      this._target.innerHTML = html
      return this._target.textContent || this._target.innerText || ""
   }
}
