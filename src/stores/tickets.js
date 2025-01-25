import { defineStore } from 'pinia';
import { useUsersStore } from './user';
export const useTicketsStore = defineStore('tickets', {
  state: () => ({
    tickets: [
      {
        id: "12",
        title: "HYPNØTICA 2025",
        date: "FRIDAY 24th JANUARY",
        name: "RACHEL CHELL",
        type: "SINGLE DAY",
        qrcode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png',
        background: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d203ace7cd45f849cefbb792a778b82f5ecdd49de0e9aaf507667a936ff309fb?apiKey=3650e9b5644d4191adc714c61c50f709&'
      },
    ]
  }),



  getters: {
    // Retorna um ticket pelo ID
    getTicketById: (state) => (id) => {
      return state.tickets.find(ticket => ticket.id === id);
    },
  },

  actions: {
    // Adiciona um novo ticket
    addTicket(id, title, date, name, type, qrcode, background) {
      const ticketExists = this.tickets.some(
        ticket => ticket.id === id
      );

      if (ticketExists) {
        throw new Error('Este ticket já existe.');
      }

      const newTicket = {
        id: id,
        title: title,
        date: date,
        name: name,
        type: type,
        qrcode: qrcode || 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png',
        background: background || 'https://cdn.builder.io/api/v1/image/assets/TEMP/d203ace7cd45f849cefbb792a778b82f5ecdd49de0e9aaf507667a936ff309fb?apiKey=3650e9b5644d4191adc714c61c50f709&'
      };

      this.tickets.push(newTicket)
      const usersStore = useUsersStore();
      if (usersStore.authenticatedUser) {
        if (!usersStore.authenticatedUser.tickets) {
          usersStore.authenticatedUser.tickets = [];
        }
        usersStore.authenticatedUser.tickets.push(newTicket);
      }
    },

    // Remove um ticket pelo ID
    removeTicket(ticketId) {
      const ticketIndex = this.tickets.findIndex(ticket => ticket.id === ticketId);

      if (ticketIndex === -1) {
        throw new Error('Ticket não encontrado');
      }

      this.tickets.splice(ticketIndex, 1);
    },

    // Atualiza informações de um ticket específico
    updateTicket(updatedTicket) {
      const ticketIndex = this.tickets.findIndex(ticket => ticket.id === updatedTicket.id);

      if (ticketIndex === -1) {
        throw new Error('Ticket não encontrado');
      }

      this.tickets[ticketIndex] = { ...this.tickets[ticketIndex], ...updatedTicket };
    }
  },
  persist: true,
});
