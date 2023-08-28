import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'simform',
    username: 'postgres',
    entities: [],
    database: 'pgWithNest',
    synchronize: true,
    logging: true,
  }),
  CompaniesModule,
  UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


