import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

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
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
