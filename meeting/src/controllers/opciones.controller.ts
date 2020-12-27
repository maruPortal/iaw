import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Opciones} from '../models';
import {OpcionesRepository} from '../repositories';

export class OpcionesController {
  constructor(
    @repository(OpcionesRepository)
    public opcionesRepository : OpcionesRepository,
  ) {}

  @post('/opciones', {
    responses: {
      '200': {
        description: 'Opciones model instance',
        content: {'application/json': {schema: getModelSchemaRef(Opciones)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Opciones, {
            title: 'NewOpciones',
            exclude: ['id'],
          }),
        },
      },
    })
    opciones: Omit<Opciones, 'id'>,
  ): Promise<Opciones> {
    return this.opcionesRepository.create(opciones);
  }

  @get('/opciones/count', {
    responses: {
      '200': {
        description: 'Opciones model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Opciones) where?: Where<Opciones>,
  ): Promise<Count> {
    return this.opcionesRepository.count(where);
  }

  @get('/opciones', {
    responses: {
      '200': {
        description: 'Array of Opciones model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Opciones, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Opciones) filter?: Filter<Opciones>,
  ): Promise<Opciones[]> {
    return this.opcionesRepository.find(filter);
  }

  @patch('/opciones', {
    responses: {
      '200': {
        description: 'Opciones PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Opciones, {partial: true}),
        },
      },
    })
    opciones: Opciones,
    @param.where(Opciones) where?: Where<Opciones>,
  ): Promise<Count> {
    return this.opcionesRepository.updateAll(opciones, where);
  }

  @get('/opciones/{id}', {
    responses: {
      '200': {
        description: 'Opciones model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Opciones, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Opciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Opciones>
  ): Promise<Opciones> {
    return this.opcionesRepository.findById(id, filter);
  }

  @patch('/opciones/{id}', {
    responses: {
      '204': {
        description: 'Opciones PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Opciones, {partial: true}),
        },
      },
    })
    opciones: Opciones,
  ): Promise<void> {
    await this.opcionesRepository.updateById(id, opciones);
  }

  @put('/opciones/{id}', {
    responses: {
      '204': {
        description: 'Opciones PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() opciones: Opciones,
  ): Promise<void> {
    await this.opcionesRepository.replaceById(id, opciones);
  }

  @del('/opciones/{id}', {
    responses: {
      '204': {
        description: 'Opciones DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.opcionesRepository.deleteById(id);
  }
}
