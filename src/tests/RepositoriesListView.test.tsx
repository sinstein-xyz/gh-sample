import { components } from "@octokit/openapi-types";
import { render } from "@testing-library/react";
import { RepositoriesListView } from "../views/RepositoriesListView";

function renderRepositoriesListView(username: string, repositories: components["schemas"]["repository"][]
) {
    return render(<RepositoriesListView username={username} repositories={repositories}/>)
}

describe("<RepositoriesListView />", () => {
    test("should display zero results", async() => {
        const userInputView = renderRepositoriesListView('testname', [

        ])
        let summary = userInputView.getByTestId("user-repository-summary")

        expect(summary).toBeInTheDocument()
        expect(summary.textContent).toBe('Found 0 repositories by testname')
    })

    test("should display non zero results", async() => {
        const userInputView = renderRepositoriesListView('testname', [
            {
                "id": 52259728,
                "node_id": "MDEwOlJlcG9zaXRvcnk1MjI1OTcyOA==",
                "name": "30DaysofSwift",
                "full_name": "sinstein/30DaysofSwift",
                "private": false,
                "owner": {
                  "login": "sinstein",
                  "id": 4283218,
                  "node_id": "MDQ6VXNlcjQyODMyMTg=",
                  "avatar_url": "https://avatars.githubusercontent.com/u/4283218?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/sinstein",
                  "html_url": "https://github.com/sinstein",
                  "followers_url": "https://api.github.com/users/sinstein/followers",
                  "following_url": "https://api.github.com/users/sinstein/following{/other_user}",
                  "gists_url": "https://api.github.com/users/sinstein/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/sinstein/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/sinstein/subscriptions",
                  "organizations_url": "https://api.github.com/users/sinstein/orgs",
                  "repos_url": "https://api.github.com/users/sinstein/repos",
                  "events_url": "https://api.github.com/users/sinstein/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/sinstein/received_events",
                  "type": "User",
                  "site_admin": false
                },
                "html_url": "https://github.com/sinstein/30DaysofSwift",
                "description": "A self taught project to learn Swift.",
                "fork": true,
                "url": "https://api.github.com/repos/sinstein/30DaysofSwift",
                "forks_url": "https://api.github.com/repos/sinstein/30DaysofSwift/forks",
                "keys_url": "https://api.github.com/repos/sinstein/30DaysofSwift/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/sinstein/30DaysofSwift/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/sinstein/30DaysofSwift/teams",
                "hooks_url": "https://api.github.com/repos/sinstein/30DaysofSwift/hooks",
                "issue_events_url": "https://api.github.com/repos/sinstein/30DaysofSwift/issues/events{/number}",
                "events_url": "https://api.github.com/repos/sinstein/30DaysofSwift/events",
                "assignees_url": "https://api.github.com/repos/sinstein/30DaysofSwift/assignees{/user}",
                "branches_url": "https://api.github.com/repos/sinstein/30DaysofSwift/branches{/branch}",
                "tags_url": "https://api.github.com/repos/sinstein/30DaysofSwift/tags",
                "blobs_url": "https://api.github.com/repos/sinstein/30DaysofSwift/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/sinstein/30DaysofSwift/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/sinstein/30DaysofSwift/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/sinstein/30DaysofSwift/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/sinstein/30DaysofSwift/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/sinstein/30DaysofSwift/languages",
                "stargazers_url": "https://api.github.com/repos/sinstein/30DaysofSwift/stargazers",
                "contributors_url": "https://api.github.com/repos/sinstein/30DaysofSwift/contributors",
                "subscribers_url": "https://api.github.com/repos/sinstein/30DaysofSwift/subscribers",
                "subscription_url": "https://api.github.com/repos/sinstein/30DaysofSwift/subscription",
                "commits_url": "https://api.github.com/repos/sinstein/30DaysofSwift/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/sinstein/30DaysofSwift/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/sinstein/30DaysofSwift/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/sinstein/30DaysofSwift/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/sinstein/30DaysofSwift/contents/{+path}",
                "compare_url": "https://api.github.com/repos/sinstein/30DaysofSwift/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/sinstein/30DaysofSwift/merges",
                "archive_url": "https://api.github.com/repos/sinstein/30DaysofSwift/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/sinstein/30DaysofSwift/downloads",
                "issues_url": "https://api.github.com/repos/sinstein/30DaysofSwift/issues{/number}",
                "pulls_url": "https://api.github.com/repos/sinstein/30DaysofSwift/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/sinstein/30DaysofSwift/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/sinstein/30DaysofSwift/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/sinstein/30DaysofSwift/labels{/name}",
                "releases_url": "https://api.github.com/repos/sinstein/30DaysofSwift/releases{/id}",
                "deployments_url": "https://api.github.com/repos/sinstein/30DaysofSwift/deployments",
                "created_at": "2016-02-22T08:48:56Z",
                "updated_at": "2016-02-22T08:48:58Z",
                "pushed_at": "2016-02-21T14:46:28Z",
                "git_url": "git://github.com/sinstein/30DaysofSwift.git",
                "ssh_url": "git@github.com:sinstein/30DaysofSwift.git",
                "clone_url": "https://github.com/sinstein/30DaysofSwift.git",
                "svn_url": "https://github.com/sinstein/30DaysofSwift",
                "homepage": "",
                "size": 169249,
                "stargazers_count": 0,
                "watchers_count": 0,
                "language": "Swift",
                "has_issues": false,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 0,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 0,
                "license": null,
                "forks": 0,
                "open_issues": 0,
                "watchers": 0,
                "default_branch": "master"
              }
        ])
        let summary = userInputView.getByTestId("user-repository-summary")

        expect(summary).toBeInTheDocument()
        expect(summary.textContent).toBe('Found 1 repositories by testname')
    })
})


export { };
