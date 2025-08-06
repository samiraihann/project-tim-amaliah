import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignModule } from './campaign/campaign.module';
import { Campaign } from './campaign/campaign.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',         // ← ganti jika perlu
      port: 5432,                // ← default PostgreSQL
      username: 'postgres',      // ← ganti sesuai DB kamu
      password: 'password',      // ← ganti sesuai DB kamu
      database: 'amaliah',       // ← ganti sesuai DB kamu
      entities: [Campaign],
      synchronize: true,
    }),
    CampaignModule,
  ],
})
export class AppModule {}
