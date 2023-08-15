import { Controller, Post, Res, HttpStatus, Req } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  @Post('/webhook')
  getHello(@Req() req: Request, @Res() res: Response) {
    const body = req.body;
    console.log(body);
    res.status(HttpStatus.OK).json(body);
  }
}
