import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field((type) => Number)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int)
  childrens: number;

  @Field((type) => Int)
  adults: number;

  @Field()
  checked: boolean;

  @Field()
  time: string;
}
