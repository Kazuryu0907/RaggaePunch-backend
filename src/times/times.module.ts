import { Module } from '@nestjs/common';
import { TimesResolver } from './times.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TimesResolver, PrismaService],
})
export class TimesModule {}
