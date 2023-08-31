import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm'
import { IUserModel } from './user.model'

@Entity('users')
export class User implements IUserModel {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        nullable: false,
    })
    zealyId: string

    @Column({
        type: 'varchar',
        nullable: true,
    })
    name: string

    @Column({
        type: 'varchar',
        nullable: true,
    })
    avt: string
    
    @Column({
        type: 'text',
        nullable: true,
    })
    address: string

    @Column({
        type: 'text',
        nullable: true,
    })
    discord: string

    @Column({
        type: 'text',
        nullable: true,
    })
    discordId: string

    @Column({
        type: 'text',
        nullable: true,
    })
    twitter: string

    @Column({
        type: 'numeric',
        nullable: false,
    })
    snapshot: number

    @Column({
        name: 'createdAt',
        type: 'timestamp',
        precision: null,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt?: Date

    @UpdateDateColumn({
        name: 'updatedAt',
        type: 'timestamp',
        precision: null,
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date
}
