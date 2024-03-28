fetch("components/p-section/p-section.html")
    .then((stream) => stream.text())
    .then((text) => define_Section(text));

function define_Section(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class Section extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){}
    }

    customElements.define("p-section",Section);
}