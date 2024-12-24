import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShopsModule } from './shops/shops.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ecommerce'), // Connexion à MongoDB
    AuthModule,
    UsersModule,
    ShopsModule,
    ProductsModule,
    OrdersModule,
  ],
})
export class AppModule {}
