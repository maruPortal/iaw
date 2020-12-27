import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Evento, EventoRelations, Opciones} from '../models';
import {MeetingDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OpcionesRepository} from './opciones.repository';

export class EventoRepository extends DefaultCrudRepository<
  Evento,
  typeof Evento.prototype.id,
  EventoRelations
> {

  public readonly opciones: HasManyRepositoryFactory<Opciones, typeof Evento.prototype.id>;

  constructor(
    @inject('datasources.meeting') dataSource: MeetingDataSource, @repository.getter('OpcionesRepository') protected opcionesRepositoryGetter: Getter<OpcionesRepository>,
  ) {
    super(Evento, dataSource);
    this.opciones = this.createHasManyRepositoryFactoryFor('opciones', opcionesRepositoryGetter,);
    this.registerInclusionResolver('opciones', this.opciones.inclusionResolver);
  }
}
