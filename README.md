# APP QualiHome & QualiPro - Equipe CCC - Create, Code and Connect

## 🚀 Sobre o Projeto
Projeto desenvolvido durante o HACKQUALI.
A solução é composta por **dois aplicativos integrados** para assistência técnica pós-obra:

1.  **QualiHome:** Para o cliente solicitar serviços e acompanhar chamados.
2.  **QualiPro:** Para a construtora/profissional gerenciar as demandas.

## 🛠 Tecnologias Utilizadas
* **Front-end:** HTML5, CSS, JavaScript
* **Design:** Figma
* **Ferramentas:** VS Code, GitHub Desktop
* **IA Auxiliar:** Gemini

## 🏁 Como rodar o projeto

⚠ **Atenção:** Este repositório contém duas pastas distintas.

### Pré-requisitos
* Navegador (Chrome, Firefox, etc).
* Git (opcional).

### Passo a passo

1. **Baixe o repositório:**
   * Clique em **<> Code** > "Download ZIP" e extraia.
   * *Ou via terminal:* `git clone https://github.com/alanakaled10/APP-QualiHome.git`

2. **Escolha qual App testar:**
   Abra a pasta descompactada e você verá duas subpastas:

   * 📂 **Pasta `QualiHome`:**
     Entre nela e clique duas vezes no `index.html` para ver a **visão do Cliente**.

   * 📂 **Pasta `QualiPro`:**
     Entre nela e clique duas vezes no `index.html` para ver a **visão da Construtora**.

---

# 🧠 Documentação de Decisões Técnicas - Equipe CCC

## 1. Arquitetura da Solução
Optamos por uma arquitetura **Front-end Decoupled** (Desacoplada), separando a visão do cliente da visão do profissional/construtora.
* **Decisão:** Criar duas aplicações distintas (`QualiHome` e `QualiPro`) no mesmo repositório.
* **Motivo:** Facilita a escalabilidade futura, permitindo que cada aplicativo evolua com funcionalidades específicas para seu público-alvo sem impactar o outro.

## 2. Tecnologias Front-end (HTML5, CSS3, JavaScript Vanilla)
Escolhemos utilizar tecnologias web nativas sem o uso de frameworks complexos (como React ou Angular) para este MVP.
* **Motivo:**
    1.  **Performance:** O código roda nativamente no navegador com carregamento instantâneo.
    2.  **Agilidade de Desenvolvimento:** Redução do tempo de configuração de ambiente (boilerplate), permitindo foco total na regra de negócio e experiência do usuário durante o curto prazo do Hackathon.
    3.  **Compatibilidade:** Funciona em qualquer dispositivo com navegador, essencial para o setor de construção civil (celulares de fiscais de obra, tablets, etc.).

## 3. Design e UX (Figma)
Todo o protótipo foi desenhado previamente no Figma com abordagem **Mobile-First**.
* **Decisão:** Focar na usabilidade em telas pequenas.
* **Motivo:** O contexto de uso do aplicativo é o canteiro de obras ou a residência do cliente, onde o uso do celular é predominante em relação ao desktop.

## 4. Integração de Inteligência Artificial (Roadmap)
A IA foi projetada para atuar como um **Agente de Triagem Inteligente**, reduzindo o volume de chamados técnicos desnecessários.

* **Pré-Análise de Chamados:** Antes de o chamado ser efetivado, a IA analisa a descrição e a foto enviada pelo usuário.
* **Sugestão de Autoatendimento:** Com base na análise, a IA sugere automaticamente um vídeo curto do **Databook** (Módulo Educativo) que resolva o problema (Ex: "Como limpar o filtro do ar-condicionado"), evitando o deslocamento de um técnico.
* **Classificação Automática:** Caso o chamado seja real, a IA já classifica a categoria (Elétrica, Hidráulica, Acabamento) e a gravidade, agilizando a fila de atendimento da construtora.

## 5. Próximos Passos (Roadmap Técnico)
Para a versão 2.0 (Pós-Hackathon), a arquitetura prevê:
* Integração com **Back-end em Node.js**.
* Persistência de dados em **PostgreSQL** para gestão robusta dos chamados.
* Implementação de autenticação JWT para segurança dos usuários.

---
Desenvolvido pela Equipe CCC - Create, Code and Connect
