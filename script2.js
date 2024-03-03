document.addEventListener("DOMContentLoaded", function() {
    // Função para criar a barra de usuário
    function criarBarra(var_nome, var_avatar) {
        // Acessa o elemento pai dentro do shadowRoot do typebot-standard
        const elementoPai = document.querySelector("typebot-standard").shadowRoot.querySelector('.typebot-container');

        // Cria a barra de usuário
        const userBar = document.createElement("div");
        userBar.className = "user-bar";
        userBar.style.cssText = "display: flex; align-items: center; background-color: #128C7E; padding: 10px; color: white; width: 100%;";

        // Botão de voltar
        const backButton = document.createElement("div");
        backButton.className = "back";
        backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg>`;
        backButton.onclick = function() { window.history.back(); };

        // Avatar
        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.innerHTML = `<img src="${var_avatar}" alt="avatar" style="width: 40px; height: 40px; border-radius: 50%;">`;

        // Nome e status
        const name = document.createElement("div");
        name.className = "name";
        name.innerHTML = `${var_nome} <span class="status">online</span>`;

        // Adiciona os elementos criados ao userBar
        userBar.append(backButton, avatar, name);

        // Insere a barra de usuário no início do elemento pai
        elementoPai.prepend(userBar);
    }

    // Exemplo de uso da função criarBarra
    criarBarra("JULINHA", "https://oraculus.tech/downloads/imagens/1-2.jpg");

    // Função para criar uma mensagem informativa
    function createInfoMessage() {
        const botBody = document.querySelector("typebot-standard").shadowRoot.querySelector(".typebot-container");
        const messagesContainer = botBody.querySelector(".typebot-chat-view");

        const message = "Esta é uma conta comercial e não recebe ligações";
        const div = document.createElement("div");
        div.innerHTML = `<div style="margin: 8px; padding: 10px; background-color: #d5f4f0; color: #53676b; border-radius: 5px; font-size: 14px;">${message}</div>`;

        messagesContainer.prepend(div); // Insere a mensagem no topo do contêiner de mensagens
    }

    createInfoMessage(); // Chama a função para criar a mensagem informativa
});
