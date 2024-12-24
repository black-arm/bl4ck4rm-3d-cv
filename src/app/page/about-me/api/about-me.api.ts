import { promises as fs } from 'fs';
import { AboutMe } from '../models';

export const fetchAboutMe = async (): Promise<AboutMe> => {
    const file = await fs.readFile( process.cwd() +  '/public/json/about-me.json', 'utf-8');
    return JSON.parse(file) as AboutMe;
}