import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class MainService {
    
    async insert<T>(repository: Repository<T>, modelEntityData: Partial<T>){
        let createModel = await repository.create(modelEntityData as any);

        let res = await repository.save(createModel);

        return res;
    }
}
