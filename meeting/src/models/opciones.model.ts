import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Opciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'string',
  })
  eventoId?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Opciones>) {
    super(data);
  }
}

export interface OpcionesRelations {
  // describe navigational properties here
}

export type OpcionesWithRelations = Opciones & OpcionesRelations;
