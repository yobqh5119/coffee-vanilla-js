export class MenuPage extends HTMLElement {
  constructor(){
    super()
    this.root = this.attachShadow({mode: 'open'})

    const style = document.createElement('style')
    this.root.appendChild(style)

    async function fetchStyle() {
      const rawStyle = await fetch('/components/MenuPage.css')
      const css = await rawStyle.json()
      style.textContent = css
    }

    fetchStyle()
  }

  connectedCallback() {
    const template = document.getElementById('menu-page-template')
    const content = template.cloneNode(true)
    this.root.appendChild(content)
  }
}

customElements.define("menu-page", MenuPage)