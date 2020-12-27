import {DefaultCrudRepository} from '@loopback/repository';
import {Opciones, OpcionesRelations} from '../models';
import {MeetingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OpcionesRepository extends DefaultCrudRepository<
  Opciones,
  typeof Opciones.prototype.id,
  OpcionesRelations
> {
  constructor(
    @inject('datasources.meeting') dataSource: MeetingDataSource,
  ) {
    super(Opciones, dataSource);
  }
}
