class DevJobsAvatar extends HTMLElement { // va a heredar de HTMLElement
  constructor() {
    super(); // llamar al constructor de HTMLElement para 
    // construir el elemento html y luego poder agregarle cosas

    this.attachShadow({ mode: 'open' }) // attachShadow es un método que nos permite crear un shadow DOM para nuestro elemento personalizado.
    // El shadow DOM es una parte del DOM que está aislada del resto del documento, lo que significa que los estilos y el contenido dentro del shadow DOM no afectarán ni serán afectados por el resto del documento. Esto es útil para crear componentes reutilizables y encapsulados.
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`
  }

  render() {
    const service = this.getAttribute('service') ?? 'github'
    const username = this.getAttribute('username') ?? 'midudev'
    const size = this.getAttribute('size') ?? '40'

    const url = this.createUrl(service, username)

    // this.shadowRoot ya que aqui se va a renderizar el contenido del shadow DOM y no del DOM principal
    this.shadowRoot.innerHTML = `
    <style>
      img {
        width: ${size}px;
        height: ${size}px;
        border-radius: 9999px;
      }
    </style>

      <img 
        src="${url}" 
        alt="Avatar de ${username}" 
        class="avatar"
      />
    `
  }

  connectedCallback() { // se llama cuando el elemento se agrega al DOM
    this.render()
  }
}

customElements.define('devjobs-avatar', DevJobsAvatar) // el nombre del elemento personalizado debe contener un "guion" para evitar conflictos con los elementos HTML estándar.