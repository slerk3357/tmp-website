fetch("components/header/header.html")
    .then((stream) => stream.text())
    .then((text) => define_Top_Header(text));

function define_Top_Header(text){
    const template = new DOMParser().parseFromString(text,"text/html").querySelector("template");

    class TopHeader extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(template.content.cloneNode(true));
        }
        connectedCallback(){
            const shadow = this.shadowRoot;
            const tocButton = shadow.getElementById("tocButton");
            tocButton?.addEventListener("click",()=>{
                tocButton.classList.toggle("active");
                document.getElementById("toc")?.classList.toggle("active");
            });
            //console.log(tocButton);

            const menuButton = shadow.getElementById("menuButton");
            menuButton?.addEventListener("click",()=>{
                menuButton.classList.toggle("active");
                document.getElementById("menu")?.classList.toggle("active");
                window.document.body.classList.toggle("active");
            });
            //console.log(menuButton);
        }
    }

    customElements.define("top-header",TopHeader);
}