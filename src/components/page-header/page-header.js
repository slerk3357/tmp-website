fetch("components/page-header/page-header.html")
    .then((stream) => stream.text())
    .then((text) => define_PageHeader(text));

function define_PageHeader(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class PageHeader extends HTMLElement {
        static get observedAttributes(){return ["data-nontitle","data-nondate","data-nondescribe"];}
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){}
        attributeChangedCallback(name, oldValue, newValue) {
            if(oldValue !== null || newValue !== ""){
                return;
            }
            switch(name){
                case "data-nontitle":
                    this.shadowRoot.getElementById("container").classList.add("nontitle");
                    break;
                case "data-nondate":
                    this.shadowRoot.getElementById("container").classList.add("nondate");
                    break;
                case "data-nondescribe":
                    this.shadowRoot.getElementById("container").classList.add("nondescribe");
                    break;
            }
        }
    }

    customElements.define("page-header",PageHeader);
}