import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('G App')
    .setVersion('1.0')
    .addTag('users')
    .addTag('user-trainning')
    .addTag('trainnings')
    .addTag('muscle-group-trainning')
    .addTag('group-type-trainning')
    .addTag('auth')
    .addTag('group-tasks')
    .addTag('tasks')
    .addTag('user-tasks')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
