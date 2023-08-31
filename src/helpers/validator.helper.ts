import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'
import { DateHelper } from './date.helper'

export function IsBiggerThan(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isBiggerThan',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints
                    const relatedValue = (args.object as any)[relatedPropertyName]
                    return typeof value === 'number' && typeof relatedValue === 'number' && value > relatedValue
                },
            },
        })
    }
}

export function IsSmallerThan(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isSmallerThan',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints
                    const relatedValue = (args.object as any)[relatedPropertyName]
                    return typeof value === 'number' && typeof relatedValue === 'number' && value < relatedValue
                },
            },
        })
    }
}

export function IsAfterNow(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isAfterNow',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints
                    const relatedValue = (args.object as any)[relatedPropertyName]
                    return typeof value === 'number' && typeof relatedValue === 'number' && value > DateHelper.now()
                },
            },
        })
    }
}
