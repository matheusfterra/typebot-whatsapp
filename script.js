function criarBarra() {
var userBar = document.createElement("div");
userBar.className = "user-bar";
var backButton = document.createElement("div");
backButton.className = "back";
backButton.innerHTML = '<i class="zmdi zmdi-arrow-left"></i>';
backButton.addEventListener("click", function() {
window.location.href = "#";
});
var avatar = document.createElement("div");
avatar.className = "avatar";
avatar.innerHTML = '<img src="https://oraculus.tech/downloads/imagens/1-2.jpg" alt="JULINHA">';
var name = document.createElement("div");
name.className = "name";
name.innerHTML = '<span>JULINHA</span> <span data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span><span class="status">online</span>';
var moreActions = document.createElement("div");
moreActions.className = "actions more";
moreActions.innerHTML = '<i class="zmdi zmdi-more-vert"></i>';
var attachmentAction = document.createElement("div");
attachmentAction.className = "actions attachment";
attachmentAction.innerHTML = '<i class="zmdi zmdi-attachment-alt"></i>';
var phoneAction = document.createElement("div");
phoneAction.className = "actions";
phoneAction.innerHTML = '<i class="zmdi zmdi-phone"></i>';
phoneAction.addEventListener("click", function() {
window.location.href = "#";
});
userBar.appendChild(backButton);
userBar.appendChild(avatar);
userBar.appendChild(name);
userBar.appendChild(moreActions);
userBar.appendChild(attachmentAction);
userBar.appendChild(phoneAction);
var elementoPai = document.querySelector("#__next");
if (elementoPai) {
elementoPai.insertBefore(userBar, elementoPai.firstChild);
}
}

const botBody = document.querySelector("typebot-standard")
.shadowRoot.querySelector(".typebot-container");
const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
const status = document.querySelector(".status");
const audioNot = document.createElement("audio");
audioNot.src = "https://s3.fr-par.scw.cloud/typebot/public/typebots/rx0zcrlqkhifqajxuzr6txa9/blocks/ttfglhs9oks32ebn2ymqcrp1?v=1690899194685";
let mensagesLength = 0;
createInfoMessage();
function createInfoMessage() {
const message= "Esta é uma conta comercial e não recebe ligações";
const div = document.createElement("div");
const infoHTML = `<div style="display: flex; align-items: center; gap: 4px; background-color: #d5f4f0; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 2rem auto .5rem;" class="info-container">
<div>
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path>
</svg>
</div>
<p style="color: #53676b;">${message}</p>
</div>`; 
div.innerHTML = infoHTML;
const messagesContainer = botBody.querySelector(".typebot-chat-view");
messagesContainer.insertBefore(div, messagesContainer.firstChild);
}
setInterval(() => {
const isTyping = botBody.querySelector('.bubble1');
const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
if(isTyping && sibling.src) {
status.innerText = "gravando audio...";
} else if(isTyping) {
status.innerText = "digitando...";
} else {
status.innerText = "Online";
}
const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');
if(allMessages.length > mensagesLength) {
if(!isTyping) {
for (let i = mensagesLength; i < allMessages.length; i++) {
const iconContainer = document.createElement('div');
const checkIcon = `<svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 0;right: 5px;" height="20" width="18">
<g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
<path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
<path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
</g>
</svg>`;
iconContainer.innerHTML = checkIcon;
const currentMsg = allMessages[i];
currentMsg.append(iconContainer);
}
mensagesLength = allMessages.length;
audioNot.play();
}
}
}, 400)

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://typebot-template.netlify.app/whatsapp/style.css';
    link.media = 'all';
    head.appendChild(link);
}
}
