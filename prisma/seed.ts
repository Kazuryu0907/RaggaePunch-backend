import { PrismaClient, post } from '@prisma/client';
const prisma = new PrismaClient();

const postData: post[] = [
  {
    id: 0,
    name: 'みけ',
    childrens: 0,
    adults: 1,
    checked: false,
    time: '1/1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    name: 'Jack',
    childrens: 2,
    adults: 1,
    checked: true,
    time: '1/1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    name: 'i',
    childrens: 2,
    adults: 1,
    checked: false,
    time: '1/2',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const doPostSeed = async () => {
  const posts = [];
  for (const post of postData) {
    const createPosts = prisma.post.create({
      data: post,
    });
    posts.push(createPosts);
  }
  return await prisma.$transaction(posts);
};

const main = async () => {
  console.log('start seed');
  await doPostSeed();
  console.log('seed fin');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
