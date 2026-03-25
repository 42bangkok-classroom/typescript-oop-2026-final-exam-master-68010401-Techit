import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ProductService {
  findAll() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const User = JSON.parse(fs.readFileSync(filePath, `utf-8`));
    const Product = JSON.stringify(User);
    const response = {
      success: true,
      data: Product,
      message: 'Fetched products successfully',
    };

    return response;
  }
}
