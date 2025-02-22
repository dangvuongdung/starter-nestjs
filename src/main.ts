import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import constant from './configs/constant';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  console.log('BOT_TOKEN', process.env.BOT_TOKEN);
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Docs')
      .setDescription('API description')
      .setVersion(constant.swagger.version)
      .addBearerAuth({ in: 'header', type: 'http' })
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(constant.swagger.pathName, app, document);
  }

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
