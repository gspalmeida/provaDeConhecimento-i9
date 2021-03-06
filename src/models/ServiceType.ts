/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import ProvidedService from './ProvidedService';

@Entity('service_types')
class ServiceType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  service_name: string;

  @OneToMany(
    () => ProvidedService,
    providedService => providedService.service,
    {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      eager: true,
    },
  )
  @JoinColumn({ name: 'service_name' })
  provided_services: ProvidedService[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ServiceType;
