import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field({ nullable: false })
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
