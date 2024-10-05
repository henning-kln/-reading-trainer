import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()


export async function createWord(word: string): Promise<void> {
    try {
        await prisma.word.create({
            data: {
                text: word
            }
        });
    } catch (error) {
        console.error("Error creating word:", error);
    }
}

export async function getAllWords(): Promise<string[]> {
    try {
        const words = await prisma.word.findMany();
        return words.map((word) => word.text);
    } catch (error) {
        console.error("Error getting words:", error);
        return [];
    }

}