// campaign.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './campaign.entity';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  findAll(): Promise<Campaign[]> {
    return this.campaignRepository.find();
  }

  findOne(id: number): Promise<Campaign | null> {
    return this.campaignRepository.findOne({ where: { id } });
  }
}
