import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'isValueUnique', async: true })
@Injectable()
export class IsValueUniqueValidator implements ValidatorConstraintInterface {
  constructor(private readonly service: any) {}

  async validate(
    value: any,
    validationArguments: ValidationArguments,
  ): Promise<boolean> {
    const { property } = validationArguments.constraints[0];

    const entity = await this.service.findByProperty(property, value);
    return !entity; // Return true if the value is unique
  }

  defaultMessage(validationArguments: ValidationArguments): string {
    const { message } = validationArguments.constraints[0];
    return message || 'Este valor já está sendo usado por outra entidade.';
  }
}
