import {Entity, model, property} from '@loopback/repository';
import {Evento} from './evento.model';

@model({settings: {strict: false}})
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: 'string',
  })
  nombre: string;

  @property({
    type: 'string',
  })
  apellido: string;

  @property({
    type: 'string',
  })
  mail: string;

  @property({
    type: 'string',
  })
  password: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  eventos?: Evento[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
