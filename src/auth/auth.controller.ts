import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sendOTP')
  async sendOTP(@Body('email') email: string) {
    try {
      await this.authService.sendOTP(email);
      return { message: 'OTP sent successfully' };
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post('verifyOTP')
  async verifyOTP(@Body('email') email: string, @Body('otp') otp: string) {
    const isValid = await this.authService.verifyOTP(email, otp);
    return { isValid };
  }
}
