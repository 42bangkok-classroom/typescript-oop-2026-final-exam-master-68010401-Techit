import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ProductService {
  findAll(){
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const data = JSON.parse(fs.readFileSync(filePath,`utf-8`));

    return data;
  }

}
