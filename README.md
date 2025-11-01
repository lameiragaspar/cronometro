# ⏱️ Cronômetro em JavaScript Puro

Este é um projeto de um cronômetro digital funcional, criado inteiramente com **JavaScript puro (Vanilla JS)**, HTML e CSS.

O objetivo principal é praticar e demonstrar conceitos fundamentais do JavaScript, como a manipulação do DOM, gerenciamento de estado e o uso de temporizadores (`setInterval` e `clearInterval`).


## ✨ Funcionalidades

O cronômetro possui as seguintes funcionalidades:

* **Iniciar:** Inicia ou retoma a contagem do tempo. O botão "Iniciar" se transforma em "Parar" quando o cronômetro está ativo.
* **Parar:** Pausa o cronômetro no tempo atual.
* **Resetar:** Para o cronômetro (se estiver rodando) e redefine o tempo para `00:00:00.000`. Também limpa a lista de voltas registradas.
* **Volta (Lap):** Registra o tempo atual em uma lista de "Voltas" sem interromper a contagem principal.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando apenas as tecnologias web fundamentais:

* **HTML5:** Para a estrutura semântica dos elementos (display, botões, lista de voltas).
* **CSS3:** Para a estilização, utilizando um design minimalista (dark mode) e fontes personalizadas (@font-face) para o visual de display digital.
* **JavaScript:** Para toda a lógica do cronômetro, incluindo:
    * Manipulação de eventos (Event Listeners) para os botões.
    * `setInterval()` para atualizar o tempo a cada milissegundo.
    * `clearInterval()` para pausar e resetar.
    * Manipulação do DOM para atualizar o display e a lista de voltas.
    * Lógica de formatação de tempo (padding de zeros e cálculo de horas/minutos/segundos).

## Licença

Este projeto está sob a licença MIT.