import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TimeModel {
  @Field(() => ID)
  id: number;
  @Field()
  time: string;
}
