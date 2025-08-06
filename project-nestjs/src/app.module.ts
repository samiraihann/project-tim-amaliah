// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignModule } from './campaign/campaign.module';
import { Campaign } from './campaign/campaign.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',      // ganti jika kamu ubah
      password: 'raihansami140707',  // ganti sesuai yang kamu atur saat install
      database: 'programs_pages',        // nama database kamu
      entities: [Campaign],
      synchronize: true,         // auto create table (jangan pakai di production)
    }),
    CampaignModule,
  ],
})
export class AppModule {}
