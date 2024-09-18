import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/events")
  getEvents(){
    return this.appService.getEvents();
  }
}
