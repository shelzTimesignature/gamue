import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from './user.service';
import { UserDto } from "./dto/user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async add(@Body() dto:UserDto){
    console.log(dto)
    const result=await this.userService.add(dto)
    return result
  }

  @Get()
  async get(){
    const result=await this.userService.get()
    return result
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }

  @Patch(":id")
  update(@Param('id') id: string, @Body() dto:UpdateUserDto){
    return this.userService.update(id,dto)

  }



}
