import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes(AppController);
      // .exclude({ path: ':id', method: RequestMethod.GET })
      // .forRoutes(AppController)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    // .forRoutes('');
  }
}
