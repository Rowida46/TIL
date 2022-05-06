console.log("RUN")

console.log("Vola Prisma")

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

let user1 = {
            firstName: 'Dana',
            lastName: 'DOd',
            email: 'dana@gmail.com'
        }
async function main() {
    const newUser = await prisma.user.create({
        data: user1,
        select : {
            email: true
        }
    });

    console.log(newUser);
    /*
    const users = await prisma.user.findMany();
    console.log(JSON.stringify(users));
    let ans = await prisma.user.findFirst({
        distinct : "email"
    });

    console.log(ans)
    const results = await prisma.user.updateMany({
    where: {
        lastName: {
            in: ['dana', 'Dod']
        }
    },
    data: {
        email: 'new_dana@gmail.com'
    }});
    console.log(ans)
    */

}

// _app.tsx

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;

main()
    .catch( e => { throw e })
    .finally( async () => await prisma.$disconnect() )
