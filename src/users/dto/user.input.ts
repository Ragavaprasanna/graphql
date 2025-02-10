import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsersInput {
  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType()
export class UpdateUsersInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;
}
