import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './dto/get-url.dto';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  create(@Body() url: CreateUrlDto): Url {
    return this.urlsService.create(url.url);
  }

  @Get(':id')
  get(@Param() params, @Res() res: Response) {
    const destination = this.urlsService.get(params.id);

    if (!destination) {
      throw new NotFoundException('url does not exist');
    }

    res.redirect(destination);
  }
}
