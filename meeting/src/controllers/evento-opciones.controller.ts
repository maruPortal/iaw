import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Evento,
  Opciones,
} from '../models';
import {EventoRepository} from '../repositories';

export class EventoOpcionesController {
  constructor(
    @repository(EventoRepository) protected eventoRepository: EventoRepository,
  ) { }

  @get('/eventos/{id}/opciones', {
    responses: {
      '200': {
        description: 'Array of Evento has many Opciones',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Opciones)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Opciones>,
  ): Promise<Opciones[]> {
    return this.eventoRepository.opciones(id).find(filter);
  }

  @post('/eventos/{id}/opciones', {
    responses: {
      '200': {
        description: 'Evento model instance',
        content: {'application/json': {schema: getModelSchemaRef(Opciones)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Evento.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Opciones, {
            title: 'NewOpcionesInEvento',
            exclude: ['id'],
            optional: ['eventoId']
          }),
        },
      },
    }) opciones: Omit<Opciones, 'id'>,
  ): Promise<Opciones> {
    return this.eventoRepository.opciones(id).create(opciones);
  }

  @patch('/eventos/{id}/opciones', {
    responses: {
      '200': {
        description: 'Evento.Opciones PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Opciones, {partial: true}),
        },
      },
    })
    opciones: Partial<Opciones>,
    @param.query.object('where', getWhereSchemaFor(Opciones)) where?: Where<Opciones>,
  ): Promise<Count> {
    return this.eventoRepository.opciones(id).patch(opciones, where);
  }

  @del('/eventos/{id}/opciones', {
    responses: {
      '200': {
        description: 'Evento.Opciones DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Opciones)) where?: Where<Opciones>,
  ): Promise<Count> {
    return this.eventoRepository.opciones(id).delete(where);
  }
}
