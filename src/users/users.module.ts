import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schema/user.schema";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [MongooseModule.forFeature([{ schema: UserSchema, name: "User" }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
