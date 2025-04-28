import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreateBuildingDTO } from './dtos/create-building.dto';
import { UpdateBuildingDTO } from './dtos/update-building.dto';

@Injectable()
export class BuildingsService {
  constructor(private readonly prisma: PrismaService) {}

  async getBuildings() {
    try {
      const buildings = await this.prisma.building.findMany();
      return {
        code: 1,
        msg: 'Success',
        data: buildings,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Get buildings failed: ' + JSON.stringify(error),
      };
    }
  }

  async getBuilding(id: string) {
    try {
      const building = await this.prisma.building.findUnique({ where: { id } });
      return {
        code: 1,
        msg: 'Success',
        data: building,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Get building failed: ' + JSON.stringify(error),
      };
    }
  }

  async createBuilding(data: CreateBuildingDTO) {
    try {
      const newBuilding = await this.prisma.building.create({ data });
      return { code: 1, msg: 'Success', data: newBuilding };
    } catch (error) {
      return {
        code: 0,
        msg: 'Create building failed: ' + JSON.stringify(error),
      };
    }
  }

  async deleteBuilding(id: string) {
    try {
      await this.prisma.building.delete({ where: { id } });
      return {
        code: 1,
        msg: 'Success',
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Delete building failed: ' + JSON.stringify(error),
      };
    }
  }

  async updateBuilding(id: string, data: UpdateBuildingDTO) {
    try {
      const updatedBuilding = await this.prisma.building.update({
        where: { id },
        data,
      });

      return {
        code: 1,
        msg: 'Success',
        data: updatedBuilding,
      };
    } catch (error) {
      return {
        code: 0,
        msg: 'Update building failed: ' + JSON.stringify(error),
      };
    }
  }
}
