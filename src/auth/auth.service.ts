import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { User } from './user.model';
import admin from './firebase-admin.config';
import 'firebase-admin';

@Injectable()
export class AuthService {

private users: User[] = [
    { user_id: '1', name: 'User 1', email: '2006159@kiit.ac.in' },
    { user_id: '2', name: 'User 2', email: 'killmonger1247@gmail.com' },
  ];
  private otpMap: { [email: string]: string } = {};
  private readonly db: FirebaseFirestore.Firestore;

  constructor() {
    this.db = admin.firestore();
  }

  async sendOTP(email: string): Promise<void> {
      const userRecord = await admin.auth().getUserByEmail(email);

      if(!userRecord){
        throw new Error('User Not Found');
      }

      const user = this.users.find(user => user.email === email);

      if (!user) {
        throw new Error('User not found');
      }

      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      this.otpMap[email] = otp;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
         }
      });

      await transporter.sendMail({
        from: 'Aditya Sinha OTP Server',
        to: email,
        subject: 'OTP for Authentication',
        text: `Your OTP is: ${otp}`,
      });

    } 

  async verifyOTP(email: string, otp: string): Promise<boolean> {
    const storedOTP = this.otpMap[email];
    if (!storedOTP || storedOTP !== otp) {
      return false;
    }

    delete this.otpMap[email];
    return true;
  }
}
