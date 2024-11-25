export class Parqueadero {
  id: number;
  nombre: string;
  nit: number;
  direccion: string;
  telefono: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.nit = 0;
    this.direccion = '';
    this.telefono = '';
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}
