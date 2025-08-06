import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  collected_donation: number;

  @Column()
  donation_target: number;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @Column()
  remaining_days: number;

  @Column()
  category: string;

  @Column()
  image: string;
}
