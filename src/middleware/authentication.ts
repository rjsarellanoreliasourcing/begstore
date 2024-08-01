import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class isAuthenticated implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    const { userEmail, userId } = req.params;
    if (!token) {
      return res.status(404).json({
        success: false,
        message: 'Unauthorized Access',
        redirect: '/denied',
      });
    }

    next();
  }
}
