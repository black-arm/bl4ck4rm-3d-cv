export interface Owner {
  avatarUrl: string;
}

export interface PrimaryLanguage {
  color: string;
  name: string;
}

export interface RepositoryNode {
  nameWithOwner: string;
  description: string | null;
  forkCount: number;
  homepageUrl: string | null;
  stargazerCount: number;
  url: string;
  owner: Owner;
  primaryLanguage: PrimaryLanguage | null;
  createdAt: string;
  updatedAt: string;
  isPrivate: boolean;
}

export interface UserRepositories {
  user: {
    repositories: {
      nodes: RepositoryNode[];
    };
    repositoriesContributedTo: {
      nodes: RepositoryNode[];
    };
  };
}