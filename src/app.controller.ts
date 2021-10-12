import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
// import { Request } from 'express';
import {
  ApiBasicAuth,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiHeader,
  ApiOAuth2,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

class TestShubham {
  @ApiProperty({ required: false })
  name?: string;
}

class TestDTO {
  @ApiProperty({ required: true })
  name?: string;
  @ApiProperty({ required: true })
  name1?: string;
}

class TestRes {
  name?: string;
  name1?: string;
}

// @ApiBasicAuth()
// @ApiBearerAuth()
// @ApiOAuth2()
// @ApiTags('provider')
@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully created.',
  //   type: TestShubham,
  // })
  getHello0(@Request() req): TestShubham {
    // console.log(req.headers)
    const result = new TestShubham();
    result.name = 'id';
    return result;
    // return req.headers['header']
    // return request.headers['authorization']
    // return this.appService.getHello();
  }
  // @ApiHeader({
  //   name: 'X-MyHeader',
  //   description: 'Custom header',
  // })
  @Post('/home')
  // @ApiParam({
  //   name: 'email',
  //   type: 'string'
  // })
  @ApiOperation({ summary: 'summary goes here' })
  @ApiResponse({
    status: 200,
    description: 'description goes here',
    type: TestRes,
  })
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully created.',
  //   type: TestShubham,
  // })
  getHello(@Body() createCatDto: TestDTO): TestShubham {
    // console.log(req.headers)
    const result = new TestShubham();
    // result.name = id
    return result;
    // return req.headers['header']
    // return request.headers['authorization']
    // return this.appService.getHello();
  }
  @ApiHeader({
    name: 'X-MyHeader',
    description: 'Custom header',
  })
  @Get('getAge')
  getHello1(@Request() req): any {
    // console.log(req.headers)
    return req.headers['header'];
    // return request.headers['authorization']
    // return this.appService.getHello();
  }
}

// start application
// load all dependecdces
// add swagger
