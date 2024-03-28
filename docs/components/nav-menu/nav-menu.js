fetch("components/nav-menu/nav-menu.html")
    .then((stream) => stream.text())
    .then((text) => define_NavMenu(text));

function define_NavMenu(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class NavMenu extends HTMLElement {
        static observedAttributes = ["class"];
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){
            setTimeout(() => {
                this.shadowRoot.getElementById("menu").classList.remove("not-loaded");
            }, 400);
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if(newValue === "active"){
                this.shadowRoot.getElementById("menu").classList.add("active");
            }else{
                this.shadowRoot.getElementById("menu").classList.remove("active");
            }
        }
    }

    customElements.define("nav-menu",NavMenu);
}