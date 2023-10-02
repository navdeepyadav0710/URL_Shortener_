let newURL = document.getElementById("shorturl");
let copyButton = document.getElementById("copy");

copyButton.onclick = ()=>{
    newURL.ariaSelected();

    window.navigator.clipboard.writeText(newURL.value);
}