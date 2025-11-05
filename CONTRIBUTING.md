# 🤝 Guia de Contribuição: Front-End Challenge Solutions Lab

Obrigado por querer fazer parte deste projeto! Sua contribuição é fundamental para o sucesso e a qualidade deste recurso de estudo.<br>
Este guia explica como você pode submeter soluções de código para serem revisadas e incluídas no nosso laboratório.

---

## 📜 1. Pré-requisitos e Regras de Ouro

Para garantir a qualidade e uniformidade do repositório, todas as contribuições devem aderir às seguintes regras:

1. **Tecnologia**: As soluções devem usar as tecnologias centrais do curso (HTML, CSS, JavaScript e React). **Observação**: Soluções de React devem focar na lógica JS pura sempre que possível.

2. **Solução Completa**: O código submetido deve incluir a **função resolvida** e o **Exemplo de Uso** fornecido no enunciado original do desafio.

3. **Formato de Submissão**: A solução deve estar dentro de um **novo arquivo HTML** (que será sua página de solução), formatado com as tags `<pre>` e `<code>`.

4. **Conteúdo do PR**: O *Pull Request* deve incluir o **novo arquivo HTML** criado e o **Template de PR preenchido** com as informações de teste.

---

## ⚙️ 2. Fluxo de Trabalho (Git/GitHub)

Siga o padrão de trabalho do Open Source para enviar sua solução:

1. **[Fork]** Crie uma cópia (*Fork*) deste repositório para sua conta no GitHub.

2. **[Clone]** Clone seu *fork* para sua máquina local.

3. **[Branch]** Crie uma *branch* de *feature* clara (Ex: `feature/logica-obternome`, `feature/css-layout-flex`).

4. **[Code]** Crie um **novo arquivo `.html`** na pasta correspondente à Trilha (Ex: `02_HTML_CSS_JS/JS_Intermediario/logNomes.html`). O conteúdo deste arquivo deve ser o **fragmento HTML de solução**, conforme detalhado na Seção 4.

5. **[Push & PR]** Envie as alterações (`push`) para o seu *fork* e abra um *Pull Request* (PR) para a *branch* `main` do repositório original.

---

## 📁 3. Estrutura de Pastas (Onde o Código Será Aplicado)

**O colaborador deve criar um novo arquivo `.html`** (Ex: `nomeDoDesafio.html`) dentro da pasta da Trilha correspondente para submeter a solução. Use a tabela abaixo para determinar o local correto:

| Trilha | Foco Principal | Pasta de Soluções |
| :--- | :--- | :--- |
| **Trilha 1** | Fundamentos e Lógica de Programação | [01\_Logica\_de\_Programacao/](./src/01_Logica_de_Programacao/) |
| **Trilha 2** | HTML, CSS e JavaScript | [02\_HTML\_CSS\_JavaScript/](./src/02_HTML_CSS_JavaScript/) |
| **Trilha 3** | React | [03\_React/](./src/03_React/) |

---

## 📋 4. O Formato Exato da Solução (O que Copiar/Colar)

O arquivo que você criar deve ser o **fragmento de conteúdo** do desafio, incluindo o bloco de solução e o seu bloco de assinatura.

**Exemplo do Conteúdo de um novo arquivo HTML (Ex: `logNomes.html`):**

```html
<div class="desafio-container">
    <h2>🧩 Desafio: [NOME DO DESAFIO]</h2>
    <p>Objetivo: Breve descrição do que o código resolve.</p>
    
    <pre>
        <code class="language-javascript">
            // Cole sua solução HTML, CSS, JS ou React.JS aqui
        </code>
    </pre>
</div>

// opcional fique a vontade para dar seu toque em estilizar essa area
<div class="contributor-info">
    <img src="(https://www.fotor.com/pt/avatar-maker/)" alt="Imagem do perfil no GitHub" class="contributor-avatar">
    <span>
        <h2>Seu Nome/Username</h2>
        <ul class="contributor-links">
            <li>
                <a href="link_para_o_GitHub" target="_blank">
                    GitHub
                </a>
            </li>
            <li>
                <a href="link_para_o_Linkedin" target="_blank">
                    LinkedIn
                </a>
            </li>
        </ul>
    </span>
</div>
```

**⚠️ Observação**: 
O atributo `class="language-javascript"` (ou `language-html`, `language-css`) é obrigatório na tag `<code>`!

Por favor, use URLs diretas para imagens (`<img src="...">`) e evite o uso de Base64 em arquivos de solução para manter o repositório leve.

---

## 5. Revisão e Merge

- **Template de PR**: Certifique-se de preencher o *Template de Pull Request* completamente, informando qual desafio resolveu e como o testou.

- **Revisão**: O merge só será aprovado pelo mantenedor (administrador do repositório) após a verificação manual da funcionalidade e da correta formatação.

Agradecemos imensamente por sua contribuição!

Com este guia, você tem um processo de contribuição muito robusto e claro! Agora você pode criar seu `PULL_REQUEST_TEMPLATE.md`.