import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, task } from '@prisma/client';
@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.taskCreateInput): Promise<task> {
    return this.prisma.task.create({ data });
  }

  findAll(): Promise<task[]> {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id: id } });
  }

  update(id: number, data: Prisma.taskUpdateInput): Promise<task> {
    return this.prisma.task.update({
      where: { id: id },
      data,
    });
  }

  remove(id: number): Promise<task> {
    return this.prisma.task.delete({ where: { id: id } });
  }
}
