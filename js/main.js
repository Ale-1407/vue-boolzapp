/*
  Milestone 1

● Replica della grafica con la possibilità di avere messaggi scritti 
dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi 
CSS diverse

● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
 visualizzare nome e immagine di ogni contatto

*/

var app = new Vue({
  el: '#app',
  data: {
    contatti: [
      { img: '/img/avatar_1.jpg', id: '1', name: 'Michele' },
      { img: '/img/avatar_2.jpg', id: '2', name: 'Fabio' },
      { img: '/img/avatar_3.jpg', id: '3', name: 'Samuele' },
      { img: '/img/avatar_4.jpg', id: '4', name: 'Alessandro B.' },
      { img: '/img/avatar_5.jpg', id: '5', name: 'Alessandro L.' },
      { img: '/img/avatar_6.jpg', id: '6', name: 'Claudia' },
      { img: '/img/avatar_7.jpg', id: '7', name: 'Davide' },
      { img: '/img/avatar_8.jpg', id: '8', name: 'Federico' },

    ]
  }
})