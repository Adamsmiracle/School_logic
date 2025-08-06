const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function test() {
  try {
    console.log('Testing Prisma client...');
    const events = await prisma.event.findMany({
      take: 1,
      include: {
        class: true
      }
    });
    console.log('Events found:', events);
    console.log('Success! The client is working correctly.');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

test();
