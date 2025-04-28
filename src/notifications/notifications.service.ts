import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreateNotificationDTO } from './dtos/create-nofication.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createNofication(data: CreateNotificationDTO) {
    try {
      const newNotification = await this.prisma.notification.create({ data });

      return {
        code: 1,
        msg: 'Success',
        data: newNotification,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Create notificaitons failed: ' + JSON.stringify(error),
      };
    }
  }

  async getNotifications() {
    try {
      const notifications = await this.prisma.notification.findMany();
      return {
        code: 1,
        msg: 'Success',
        data: notifications,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Get notificaitons failed: ' + JSON.stringify(error),
      };
    }
  }

  async getNofication(id: string) {
    try {
      const notificaiton = await this.prisma.notification.findUnique({
        where: { id },
      });

      return {
        code: 1,
        msg: 'Success',
        data: notificaiton,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Get notificaiton failed: ' + JSON.stringify(error),
      };
    }
  }
}
