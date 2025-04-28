import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreatePaymentDTO } from './dtos/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPayments() {
    try {
      const payments = await this.prisma.payment.findMany();
      return {
        code: 1,
        msg: 'Success',
        data: payments,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Get payments failed: ' + JSON.stringify(error),
      };
    }
  }

  async getPayment(id: string) {
    try {
      const payment = await this.prisma.payment.findUnique({ where: { id } });
      return {
        code: 1,
        msg: 'Success',
        data: payment,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Get payment failed: ' + JSON.stringify(error),
      };
    }
  }

  async createPayment(data: CreatePaymentDTO) {
    try {
      const newPayment = await this.prisma.payment.create({ data });
      return {
        code: 1,
        msg: 'Success',
        data: newPayment,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Create payment failed: ' + JSON.stringify(error),
      };
    }
  }
}
