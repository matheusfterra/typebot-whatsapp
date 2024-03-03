    function criarBarra() {
        const typebotContainer = document.querySelector("typebot-standard");
        if (!typebotContainer || !typebotContainer.shadowRoot) {
            console.error("Container do Typebot ou shadowRoot não encontrado");
            return;
        }

        const elementoPai = typebotContainer.shadowRoot.querySelector('.typebot-container');
        if (!elementoPai) {
            console.error("Elemento pai dentro do shadowRoot não encontrado");
            return;
        }

        const userBar = document.createElement("div");
        userBar.className = "user-bar";
        userBar.style.cssText = `
            display: flex;
            align-items: center;
            background-color: #075E54; /* Cor de fundo do WhatsApp */
            color: white;
            padding: 10px 20px;
            width: 100%;
            box-sizing: border-box;
            position: fixed;
            top: 0;
            z-index: 1000;
        `;

        const backButton = document.createElement("div");
        backButton.className = "back";
        backButton.innerHTML = `<i class="zmdi zmdi-arrow-left" style="color: white; font-size: 24px;"></i>`;
        backButton.onclick = function() {
            history.back();
        };

        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.innerHTML = `<img src="https://oraculus.tech/downloads/imagens/1-2.jpg" alt="Avatar" style="width: 40px; height: 40px; border-radius: 50%;">`;

        const name = document.createElement("div");
        name.className = "name";
        name.innerHTML = `JULINHA <span class="status">online</span>`;
        name.style.cssText = `
            flex-grow: 1;
            font-weight: bold;
            margin-left: 10px;
        `;

        const statusSpan = name.querySelector(".status");
        statusSpan.style.cssText = `
            display: block;
            font-weight: normal;
            font-size: 13px;
            color: #ccc;
        `;

        userBar.appendChild(backButton);
        userBar.appendChild(avatar);
        userBar.appendChild(name);

        elementoPai.prepend(userBar);

        // Insere CSS adicional se necessário
        const cssId = 'customUserBarStyle';
        if (!document.getElementById(cssId)) {
            const head = document.head || document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.id = cssId;
            style.type = 'text/css';
            style.textContent = `
                .user-bar { /* Estilos adicionais se necessário */ }
            `;
            head.appendChild(style);
        }
    }

    criarBarra();

    function createInfoMessage() {
        const typebotContainer = document.querySelector("typebot-standard");
        const botBody = typebotContainer.shadowRoot.querySelector(".typebot-container");
        const messagesContainer = botBody.querySelector(".typebot-chat-view");

        const message = "Esta é uma conta comercial e não recebe ligações";
        const div = document.createElement("div");
        div.innerHTML = `<div style="display: flex; align-items: center; gap: 4px; background-color: #d5f4f0; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 2rem auto .5rem;" class="info-container">
            <div>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path>
                </svg>
            </div>
            <p style="color: #53676b;">${message}</p>
        </div>`;
        messagesContainer.insertBefore(div, messagesContainer.firstChild);
    }

    createInfoMessage();
