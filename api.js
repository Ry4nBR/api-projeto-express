import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const fusosHorarios = [
  { cidade: 'Brasília', pais: 'Brasil', fusoHorario: 'America/Sao_Paulo' },
  { cidade: 'Nova York', pais: 'Estados Unidos', fusoHorario: 'America/New_York' },
  { cidade: 'Londres', pais: 'Reino Unido', fusoHorario: 'Europe/London' },
  { cidade: 'Paris', pais: 'França', fusoHorario: 'Europe/Paris' },
  { cidade: 'Tóquio', pais: 'Japão', fusoHorario: 'Asia/Tokyo' },
];

function formatarHorario(agora, localidade) {
  const { fusoHorario } = localidade;

  return {
    ...localidade,
    data: new Intl.DateTimeFormat('pt-BR', {
      timeZone: fusoHorario,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(agora),
    hora: new Intl.DateTimeFormat('pt-BR', {
      timeZone: fusoHorario,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    }).format(agora),
  };
}

app.get('/', (req, res) => {
  res.json({
    status: 'API funcionando',
    mensagem: 'Servidor da API de data e hora ativo.'
  });
});

app.get('/data-hora', (req, res) => {
  const agora = new Date();
  const horarios = fusosHorarios.map((localidade) => formatarHorario(agora, localidade));

  res.json({
    data: horarios[0].data,
    hora: horarios[0].hora,
    dataHora: agora.toISOString(),
    horarios,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
