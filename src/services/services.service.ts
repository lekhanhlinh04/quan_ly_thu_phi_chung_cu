import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreateServiceDTO } from './dtos/create-service.dto';
import { UpdateServiceDTO } from './dtos/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async getServices() {
    try {
      const services = await this.prisma.service.findMany();
      return {
        code: 1,
        msg: 'Success',
        data: services,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Get services failed: ' + JSON.stringify(error),
      };
    }
  }

  async getService(id: string) {
    try {
      const service = await this.prisma.service.findUnique({
        where: { id },
      });

      return {
        code: 1,
        msg: 'Success',
        data: service,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Get service failed: ' + JSON.stringify(error),
      };
    }
  }

  async createService(data: CreateServiceDTO) {
    try {
      const newService = await this.prisma.service.create({ data });

      return {
        code: 1,
        msg: 'Success',
        data: newService,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Create service failed: ' + JSON.stringify(error),
      };
    }
  }

  async updateService(id: string, data: UpdateServiceDTO) {
    try {
      const updatedService = await this.prisma.service.update({
        where: { id },
        data,
      });

      return { code: 1, msg: 'Success', data: updatedService };
    } catch (error) {
      return {
        code: 0,
        msg: 'Update service failed: ' + JSON.stringify(error),
      };
    }
  }

  async deleteService(id: string) {
    try {
      await this.prisma.service.delete({ where: { id } });
      return {
        code: 1,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Delete service failed: ' + JSON.stringify(error),
      };
    }
  }
}
