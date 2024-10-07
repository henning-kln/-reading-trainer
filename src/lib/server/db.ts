import {PrismaClient} from "@prisma/client"
import { getCache, setCache } from "./cache";

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
    if(getCache('words')){
        return getCache('words') as string[];
    }
    try {
        const words = await prisma.word.findMany();
        const wordsArray = words.map((word) => word.text);
        setCache('words', wordsArray);
        return wordsArray;
    } catch (error) {
        console.error("Error getting words:", error);
        return [];
    }

}

export async function deleteWord(word: string): Promise<void> {
    try {
        await prisma.word.delete({
            where: {text: word}
        });
    } catch (error) {
        console.error("Error deleting word:", error);
    }
}

export async function createGhostRate(): Promise<void> {
    try {
        await prisma.settings.create({
            data: {
                key: 'ghost-rate',
                value: '50'
            }
        });
    } catch (error) {
        console.error("Error creating ghost rate:", error);
    }
}

export async function setGhostRate(ghostRate: number): Promise<void> {
    try {
        await prisma.settings.update({
            where: {key: 'ghost-rate'},
            data: {value: ghostRate.toString()}
        })
    } catch (error) {
        console.error("Error setting ghost rate:", error);
    }
}
export async function getGhostRate(): Promise<number> {
    try {
        const ghostRate = await prisma.settings.findUnique({
            where: {key: 'ghost-rate'}
        });
        if(!ghostRate) return 0;
        return Number(ghostRate.value);
    } catch (error) {
        console.error("Error getting ghost rate:", error);
        return 0;
    }
}

export async function createTimer(): Promise<void> {
    try {
        await prisma.settings.create({
            data: {
                key: 'timer',
                value: '2'
            }
        });
    } catch (error) {
        console.error("Error creating timer:", error);
    }
}
export async function setTimer(timer: number): Promise<void> {
    try {
        await prisma.settings.update({
            where: {key: 'timer'},
            data: {value: timer.toString()}
        })
    } catch (error) {
        console.error("Error setting timer:", error);
    }
}
export async function getTimer(): Promise<number> {
    try {
        const timer = await prisma.settings.findUnique({
            where: {key: 'timer'}
        });
        if(!timer) return 0;
        return Number(timer.value);
    } catch (error) {
        console.error("Error getting timer:", error);
        return 0;
    }
}


if(await getGhostRate() === 0){
    await createGhostRate();
}
if(await getTimer() === 0){
    await createTimer();
}