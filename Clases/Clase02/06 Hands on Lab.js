// Registrador de Tickets de eventos

class TicketManager {
	#precioBaseDeGanancia = 1.2;

	#generarId() {
		const id = this.eventos.length === 0 ? 1 : this.eventos[this.eventos.length - 1].id + 1;
		return id; // se crea el id on el incremental en uno
	}

	constructor() {
		this.eventos = [];
	}

	getEventos() {
		return this.eventos;
	}

	agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
		const evento = {
			id: this.#generarId(),
			nombre,
			lugar,
			precio: precio * this.#precioBaseDeGanancia,
			capacidad,
			fecha,
			participantes: [],
		};
		this.eventos.push(evento);
	}
}

const manager = new TicketManager();
 
manager.agregarEvento("evento1", "lugar1", 50);
manager.agregarEvento("evento2", "lugar2", 60);
manager.agregarEvento("evento3", "lugar3", 70);

console.log(getEventos());
