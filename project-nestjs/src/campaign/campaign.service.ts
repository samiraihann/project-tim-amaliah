import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './campaign.entity';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignRepository: Repository<Campaign>,
  ) {}

  // GET all campaigns
  findAll(): Promise<Campaign[]> {
    return this.campaignRepository.find();
  }

  // GET campaign by ID
  findOne(id: number): Promise<Campaign> {
    return this.campaignRepository.findOne({ where: { id } });
  }
}
