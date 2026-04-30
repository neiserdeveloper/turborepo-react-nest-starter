import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  await prisma.user.deleteMany();

  const users = await prisma.user.createMany({
    data: [
      { name: 'Neiser Custodio', email: 'neiser@example.com' },
      { name: 'Ana García', email: 'ana.garcia@example.com' },
      { name: 'Carlos López', email: 'carlos.lopez@example.com' },
      { name: 'María Torres', email: 'maria.torres@example.com' },
      { name: 'Luis Ramírez', email: 'luis.ramirez@example.com' },
    ],
  });

  console.log(`✅ ${users.count} usuarios creados`);
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
