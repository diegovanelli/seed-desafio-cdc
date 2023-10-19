import { HttpException, HttpStatus } from '@nestjs/common';

export class UniqueConstraintException extends HttpException {
  constructor(field: string, value: any) {
    const message = `O valor "${value}" para o campo "${field}" já existe.`;
    super(message, HttpStatus.CONFLICT);
  }
}
