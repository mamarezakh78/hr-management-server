import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { HttpErrorFilter } from './shared/http-error.filter';
import { APP_FILTER } from '@nestjs/core';
import { MainService } from './shared/services/main.service';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: ".env"
                })
            ],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USER'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                entities: [__dirname + '/**/*.entity.{ts,js}'],
                synchronize: true,
            }),
            inject: [ConfigService]
        }),
        EmployeeModule
    ],
    controllers: [AppController],
    providers: [AppService,
        { provide: APP_FILTER, useClass: HttpErrorFilter }
    ],
})
export class AppModule { }
