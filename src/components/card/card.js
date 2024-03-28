fetch("components/card/card.html")
    .then((stream) => stream.text())
    .then((text) => define_Card(text));

function define_Card(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class Card extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){
            const href = this.getAttribute("href");
            const shadow = this.shadowRoot;
            const anchor = shadow.getElementById("anchor");
            anchor.href = href;
        }
    }

    customElements.define("digest-card",Card);
}