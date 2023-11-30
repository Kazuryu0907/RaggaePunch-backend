import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PrismaService } from '../prisma.service';
@Module({
  providers: [PostsResolver, PrismaService],
})
export class PostsModule {}
