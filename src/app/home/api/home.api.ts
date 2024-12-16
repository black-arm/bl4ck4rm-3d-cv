import { UserInfo } from "@/shared/model";
import { promises as fs } from 'fs';

export async function getInfo(): Promise<UserInfo> {

    const file = await fs.readFile( process.cwd() + 
        '/public/json/info.json', 'utf-8');
    return JSON.parse(file);
}