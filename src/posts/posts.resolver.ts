import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { PrismaService } from 'src/prisma.service';
import { CreatePostInput } from './interfaces/create-post.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => PostModel)
export class PostsResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return this.prismaService.post.findMany({
      orderBy: [
        {
          time: 'asc',
        },
        {
          checked: 'desc',
        },
        {
          id: 'asc',
        },
      ],
    });
  }

  @Mutation(() => PostModel)
  async updateCheck(@Args('id', { type: () => Int }) id: number) {
    const post = await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
    return this.prismaService.post.update({
      where: {
        id: id,
      },
      data: {
        checked: !post.checked,
      },
    });
  }

  @Mutation(() => PostModel)
  async createPost(@Args('input') input: CreatePostInput) {
    const newPost = this.prismaService.post.create({
      data: {
        name: input.name,
        childrens: input.childrens,
        adults: input.adults,
        checked: input.checked,
        time: input.time,
      },
    });
    //Publishing the event
    pubSub.publish('postAdded', { postAdded: newPost });
    return newPost;
  }

  @Subscription(() => PostModel)
  async postAdded() {
    return pubSub.asyncIterator('postAdded');
  }
}
