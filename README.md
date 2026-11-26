# API de Data e Hora — Aula 04, Atividade 2.2

Este repositório contém a API desenvolvida para a atividade 2.2 da Aula 04. O serviço usa Node.js e Express para fornecer a data e a hora atuais em cinco cidades, cada uma em seu fuso horário. O front-end que consome a API está em um [repositório separado](https://github.com/Ry4nBR/front-end-projeto-express).

## Tecnologias

- Node.js
- Express
- CORS

## Executar localmente

Requer Node.js e npm instalados.

```bash
npm install
npm start
```

Por padrão, a API inicia na porta `3000`. Se a plataforma definir a variável de ambiente `PORT`, ela será usada no lugar da porta padrão.

## Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/` | Retorna o status e uma mensagem indicando que a API está ativa. |
| `GET` | `/data-hora` | Retorna o instante atual e os horários locais de Brasília, Nova York, Londres, Paris e Tóquio. |

Cada item de `horarios` contém `cidade`, `pais`, `fusoHorario`, `data` e `hora`. Todos são calculados a partir do mesmo instante para manter os fusos sincronizados.

## URLs

- API publicada no Render: [https://projeto-express-iqa3.onrender.com/](https://projeto-express-iqa3.onrender.com/)
- Endpoint de horários: [https://projeto-express-iqa3.onrender.com/data-hora](https://projeto-express-iqa3.onrender.com/data-hora)
- Front-end publicado na Vercel: [https://front-end-projeto-express.vercel.app/](https://front-end-projeto-express.vercel.app/)

## Repositórios e entrega

- API (este repositório): [Ry4nBR/projeto-express](https://github.com/Ry4nBR/projeto-express)
- Front-end: [Ry4nBR/front-end-projeto-express](https://github.com/Ry4nBR/front-end-projeto-express)
- [Documento e evidências da entrega da Aula 04](./ENTREGA-AULA-04.md)
