const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'A fazer',
      cards: [
        {
          id: 'card-1',
          title: 'Criar Banco',
        },
        {
          id: 'card-2',
          title: 'Infelizmente não deu tempo',
        },
      ],
    },
    'list-2': {
      id: 'list-2',
      title: 'Fazendo',
      cards: [
        {
          id: 'card-4',
          title: 'Criar layout',
        },
        {
          id: 'card-5',
          title: 'Criar server',
        },
      ],
    },
    'list-3': {
      id: 'list-2',
      title: 'Concluido',
      cards: [
        {
          id: 'card-4',
          title: 'Criar Trello em php',
        },
        {
          id: 'card-5',
          title: 'Hospedar Trello react no heroku',
        },
      ],
    },
  },
  listIds: ['list-1', 'list-2', 'list-3'],
};

export default data;
