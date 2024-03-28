fetch("components/card-section/card-section.html")
    .then((stream) => stream.text())
    .then((text) => define_Card_Section(text));

function define_Card_Section(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class CardSection extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){}
    }

    customElements.define("card-section",CardSection);
}