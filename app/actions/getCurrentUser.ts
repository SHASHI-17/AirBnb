import { getServerSession } from 'next-auth/next';


import prisma from '@/app/libs/prismadb'
import { authOptions } from '../api/auth/[...nextauth]/route';



export async function getSession() {
    return await getServerSession(authOptions);
}

 const  getCurrentUser = async () => {
    try {
        const session = await getSession();

        if (!session?.user?.email) return null;

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        if (!currentUser) return null;

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        };

    } catch (error: any) {
        return null;
    }
};

export default getCurrentUser