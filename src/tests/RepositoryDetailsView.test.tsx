import { components } from "@octokit/openapi-types";
import { render } from "@testing-library/react";
import { RepositoryDetailsView } from "../views/RepositoryDetailsView";

function renderRepositoryDetailsView(name: string, details: components["schemas"]["content-directory"]) {
    return render(<RepositoryDetailsView name={name} details={details}/>)
}

describe("<RepositoryDetailsView />", () => {
    test("should display a blank readme when no files found", async() => {
        const userInputView = renderRepositoryDetailsView("testname", [])
        let fileList = userInputView.getByTestId("file-list")
        let readmeContent = userInputView.getByTestId("readme-content")

        expect(fileList).toBeInTheDocument()
        expect(fileList).toBeEmptyDOMElement()
        expect(readmeContent).toBeInTheDocument()
        expect(readmeContent.textContent).toBe("No README found")
    })

    test("should display a blank readme when files found without readme", async() => {
        const userInputView = renderRepositoryDetailsView("testname", [
            {
                "name": "not_readme.md",
                "path": "not_readme.md",
                "sha": "679501f094ba2be80ebf0c1fe48b140c564fcde8",
                "size": 11283,
                "url": "https://api.github.com/repos/sinstein/api/contents/README.md?ref=v4",
                "html_url": "https://github.com/sinstein/api/blob/v4/README.md",
                "git_url": "https://api.github.com/repos/sinstein/api/git/blobs/679501f094ba2be80ebf0c1fe48b140c564fcde8",
                "download_url": "https://raw.githubusercontent.com/sinstein/api/v4/README.md",
                "type": "file",
                "_links": {
                    "self": "https://api.github.com/repos/sinstein/api/contents/README.md?ref=v4",
                    "git": "https://api.github.com/repos/sinstein/api/git/blobs/679501f094ba2be80ebf0c1fe48b140c564fcde8",
                    "html": "https://github.com/sinstein/api/blob/v4/README.md"
                }
            }
        ])
        let fileList = userInputView.getByTestId("file-list")
        let readmeContent = userInputView.getByTestId("readme-content")

        expect(fileList).toBeInTheDocument()
        expect(readmeContent).toBeInTheDocument()
        expect(readmeContent.textContent).toBe("No README found")
    })

    test("should display a readme when files found with readme", async() => {
        const userInputView = renderRepositoryDetailsView("testname", [
            {
                "name": "README.md",
                "path": "README.md",
                "sha": "679501f094ba2be80ebf0c1fe48b140c564fcde8",
                "size": 11283,
                "url": "https://api.github.com/repos/sinstein/api/contents/README.md?ref=v4",
                "html_url": "https://github.com/sinstein/api/blob/v4/README.md",
                "git_url": "https://api.github.com/repos/sinstein/api/git/blobs/679501f094ba2be80ebf0c1fe48b140c564fcde8",
                "download_url": "https://raw.githubusercontent.com/sinstein/api/v4/README.md",
                "type": "file",
                "_links": {
                    "self": "https://api.github.com/repos/sinstein/api/contents/README.md?ref=v4",
                    "git": "https://api.github.com/repos/sinstein/api/git/blobs/679501f094ba2be80ebf0c1fe48b140c564fcde8",
                    "html": "https://github.com/sinstein/api/blob/v4/README.md"
                }
            }
        ])
        let fileList = userInputView.getByTestId("file-list")
        let readmeContent = userInputView.getByTestId("readme-content")

        expect(fileList).toBeInTheDocument()
        expect(readmeContent).toBeInTheDocument()
        expect(readmeContent.textContent).toBe("No README found")
    })
})


export { };
