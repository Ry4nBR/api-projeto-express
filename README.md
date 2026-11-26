# Projeto Express

API simples em Node.js com Express para consultar a data e hora atual do servidor.

## Como instalar

```bash
npm install
```

## Como executar

```bash
npm start
```

## Rotas

- GET `/` - mensagem de status da API
- GET `/data-hora` - retorna a data/hora de Brasília, o instante ISO e a lista `horarios` em JSON

Cada item de `horarios` contém `cidade`, `pais`, `fusoHorario`, `data` e `hora`.
A lista inclui Brasília, Nova York, Londres, Paris e Tóquio, calculados a partir
do mesmo instante para manter os horários consistentes.

## Exemplos locais

- http://localhost:3000/
- http://localhost:3000/data-hora
