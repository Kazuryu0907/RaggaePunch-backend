import { Field, ObjectType, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field((type) => ID)
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
