import { Controller, Get, Param } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { Campaign } from './campaign.entity';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  getAllCampaigns(): Promise<Campaign[]> {
    return this.campaignService.findAll();
  }

  @Get(':id')
 getCampaignById(@Param('id') id: string): Promise<Campaign | null> {
  return this.campaignService.findOne(Number(id));
}
}
