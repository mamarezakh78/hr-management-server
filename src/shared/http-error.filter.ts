import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const message = exception.message;

        response.status(status).json({
            message,
            statusCode: status,
            time: new Date().toISOString(),
        });
    }
}