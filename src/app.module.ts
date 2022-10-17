import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TablaCategoria } from './categoria/entities/categoria.entities';
import { TablaProducto } from './producto/entities/producto.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `mysql`,
      host: `çocalhost`,
      port: 3306,
      username: `root`,
      password: `root`,
      database: `db_GamePlay`,
      entities: [TablaProducto,TablaCategoria],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
