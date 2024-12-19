export const projectsQuery = `query($login: String!){
    user(login: $login){
        repositories(last: 100, isFork: false) {
            nodes {
                nameWithOwner,
                description,
                forkCount,
                homepageUrl,
                stargazerCount,
                url,
                owner {
                    avatarUrl
                },
                primaryLanguage{
                    color,
                    name
                }
            }
        }
        repositoriesContributedTo(last: 100) {
            nodes {
                nameWithOwner,
                description,
                forkCount,
                homepageUrl,
                url,
                stargazerCount,
                owner {
                    avatarUrl
                },
                primaryLanguage {
                    color,
                    name
                }
            }
        }
    }
}`;