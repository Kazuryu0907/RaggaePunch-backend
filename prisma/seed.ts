import { PrismaClient } from '@prisma/client';
import { CreatePostInput } from 'src/posts/interfaces/create-post.input';
const prisma = new PrismaClient();

const postData: CreatePostInput[] = [
  {
    name: 'みけ',
    childrens: 0,
    adults: 1,
    checked: false,
    time: '1/1',
  },
  {
    name: 'Jack',
    childrens: 2,
    adults: 1,
    checked: true,
    time: '1/1',
  },
  {
    name: 'i',
    childrens: 2,
    adults: 1,
    checked: false,
    time: '1/2',
  },
];

const timeData = [
  {
    time: '1/1',
  },
  {
    time: '1/2',
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
  for (const time of timeData) {
    const createTimes = prisma.time.create({
      data: time,
    });
    posts.push(createTimes);
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
