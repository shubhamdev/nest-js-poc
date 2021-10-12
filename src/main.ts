import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// import { ValidationPipe } from '@nestjs/common'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  // app.useGlobalPipes(new ValidationPipe())
  // npm install --save @nestjs/swagger fastify-swagger
  const config = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('The test API description')
    .setVersion('1.0')
    // .addOAuth2()
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    // .addBearerAuth({ in: 'header', type: 'http' })
    // .addBasicAuth()
    // .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  // await app.listen(3000, '0.0.0.0');
  await app.listen(3000);
}
bootstrap();
