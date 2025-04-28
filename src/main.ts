import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // Import thêm

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // --- Cấu hình Swagger ---
  const config = new DocumentBuilder()
    .setTitle('API Quản Lý Thu Phí Chung Cư') // Tên dự án
    .setDescription('Tài liệu API cho dự án Quản Lý Thu Phí Chung Cư') // Mô tả
    .setVersion('1.0') // Phiên bản
    // .addTag('cats') // Bạn có thể thêm các tag mặc định ở đây nếu muốn
    .addBearerAuth() // Thêm nút Authorize để nhập JWT Bearer Token
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // '/api-docs' là đường dẫn để xem UI
  // --- Kết thúc cấu hình Swagger ---

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger Docs available at ${await app.getUrl()}/api-docs`); // Thông báo đường dẫn Swagger
}
bootstrap();
