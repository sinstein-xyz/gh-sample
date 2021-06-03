import { components } from "@octokit/openapi-types";
import axios from "axios";
import { useEffect, useState } from "react";

interface contentFileType {
    type: string;
    size: number;
    name: string;
    path: string;
    content?: string;
    sha: string;
    url: string;
    git_url: string | null;
    html_url: string | null;
    download_url: string | null;
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
}


export function RepositoryDetailsView(props: {
    name: string,
    details: components["schemas"]["content-directory"]
}) {

    const [readmeContent, setReadmeContents] = useState("No README found")


    useEffect(() => {
        findReadMe()
    })

    const findReadMe = () => {
        let readmeFile = props.details.find((file: contentFileType) => file.name == 'README.md')

        if(readmeFile) {
            axios.get<components["schemas"]["content-file"]>(readmeFile?.url)
            .then(function(response) {
                let readmeFileContents = response.data.content
                console.log(atob(readmeFileContents))
                setReadmeContents(atob(readmeFileContents))
            })
            .catch(function (error) {
                console.error(error);
            })
        }
    }

    const renderReadMe = () => {
        return <div>
            <h5>README</h5>
            {readmeContent}
        </div>
    }

    return (
        <div className="repository-details">
            <h4>Details for {props.name}</h4>
            <ul>
                {props.details?.map((file: contentFileType) => {
                    return <li>
                        {file.name}
                    </li>
                })}
            </ul>
            {renderReadMe()}
        </div>
    )
}