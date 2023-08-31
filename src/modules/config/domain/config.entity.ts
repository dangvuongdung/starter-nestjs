import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IConfigModel } from './config.model'

@Entity('configs')
export class Config implements IConfigModel {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        nullable: false,
    })
    key: string

    @Column({
        type: 'text',
        nullable: false,
    })
    value: string

    @Column({
        name: 'createdAt',
        type: 'timestamp',
        precision: null,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt?: Date

    @Column({
        name: 'updatedAt',
        type: 'timestamp',
        precision: null,
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date
}
