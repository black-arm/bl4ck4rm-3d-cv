import { UserInfo, UserRepositories } from "@/shared/model";
import { Octokit } from 'octokit';
import { promises as fs } from 'fs';
import { projectsQuery } from "./queries";
import { DevToArticles } from "../model";

export async function getInfo(): Promise<UserInfo> {

    const file = await fs.readFile( process.cwd() + 
        '/public/json/info.json', 'utf-8');
    return JSON.parse(file);
}

export async function fetchRepositories(): Promise<UserRepositories | undefined> {
  try {
    
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });
  
    const data = await octokit.graphql<UserRepositories>(projectsQuery, { 
      login: process.env.GITHUB_LOGIN
    });

    return data

  } catch (error) {
    console.error(error);
  }
}

export async function fetchArticlesList(): Promise<DevToArticles> {

  const username = process.env.DEV_TO_USERNAME;
  const response = await fetch(`https://dev.to/api/articles?username=${username}`);
  return await response.json() as DevToArticles;
}