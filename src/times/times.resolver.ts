import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { TimeModel } from './interfaces/times.model';

@Resolver()
export class TimesResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [TimeModel], { nullable: true })
  async getTimes() {
    return this.prismaService.time.findMany({
      orderBy: [
        {
          time: 'asc',
        },
      ],
    });
  }

  @Mutation(() => TimeModel)
  async createTime(@Args('input') input: string) {
    const newTime = this.prismaService.time.create({
      data: {
        time: input,
      },
    });
    return newTime;
  }

  @Mutation(() => TimeModel)
  async deleteTime(@Args('id') id: number) {
    const time = this.prismaService.time.delete({
      where: {
        id: id,
      },
    });
    return time;
  }
}
