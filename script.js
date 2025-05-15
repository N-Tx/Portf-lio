

  const cards = [
    {
      image: 'img/bsday.png',
      title: 'BSDay - Evento Acadêmico',
      desc: 'Site criado em equipe usando Git, GitHub, TailwindCSS e JS. Projeto completo e responsivo com grande aprendizado em colaboração e versionamento.',
      tag: 'Site'
    },
    {
      image: 'img/sportclubcfundo.png',
      title: 'RuralSportClub - Sistema de Reservas',
      desc: 'Sistema de reserva de quadras para a UFRRJ. Idealizado para facilitar o uso das quadras, com backend em Python. Ainda em desenvolvimento.',
      tag: 'Sistema'
    },
    {
      image: 'img/LOGO_RESTAURANTE.png',
      title: 'Restaurante de Comidas Típicas Gaúchas',
      desc: 'Um dos meus primeiros projetos web: um site de restaurante feito apenas com HTML e CSS puro, focado em pratos típicos da cultura gaúcha.',
      tag: 'Site'
    }
  ];

  let current = 0;

  function updateCard(index) {
    const card = cards[index];
    document.getElementById('card-image').src = card.image;
    document.getElementById('card-title').textContent = card.title;
    document.getElementById('card-desc').textContent = card.desc;
    document.getElementById('card-tag').textContent = card.tag;
  }

  function nextCard() {
    current = (current + 1) % cards.length;
    updateCard(current);
  }

  function prevCard() {
    current = (current - 1 + cards.length) % cards.length;
    updateCard(current);
  }
