import { Injectable, NestMiddleware } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request, Response, NextFunction } from 'express';

@ApiBearerAuth()
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('.....................IN............');
    console.log(
      'Request...........................................' +
        JSON.stringify(req.params),
    );
    next();
  }
}
