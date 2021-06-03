import { components } from "@octokit/openapi-types"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { RepositoryDetailsView } from "./RepositoryDetailsView"

export function RepositoriesListView(props: {
    username: string,
    repositories: components["schemas"]["repository"][]
}) {

    const [selectedRepository, setSelectedRepository] = useState<components["schemas"]["repository"]>()
    const [selectedRepositoryDetails, setSelectedRepositoryDetails] = useState<components["schemas"]["content-directory"]>()
    const [message, setMessage] = useState<string>()

    useEffect(() => {
        fetchRepositoryDetails()
    }, [selectedRepository])

    const onRepositorySelect = (repository: components["schemas"]["repository"]) => {
        setSelectedRepository(repository)
    }

    const fetchRepositoryDetails = () => {
        if(!selectedRepository) return
        axios.get<components["schemas"]["content-directory"]>(`${selectedRepository?.url}/contents`)
    .then(function (response) {
        setSelectedRepositoryDetails(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
        setMessage(error.message);
      })
    }

    const repositoriesView = () => {
        return props.repositories.map((repo: components["schemas"]["repository"]) => {
            return <li key={repo.name}>
                <a href={`#${repo.name}`} onClick={(_: React.SyntheticEvent) => {onRepositorySelect(repo)}}>{repo.name}</a>
                </li>
            })
    }

    return (
        <div className="repositories">
            <div className="repositories-list" key={props.username}>
                <h4 data-testid='user-repository-summary'>Found {props.repositories.length} repositories by {props.username}</h4>
                {message && <p className='message'>{message}</p>}
                <ol>
                    {repositoriesView()}
                </ol>
            </div>

            {selectedRepository && selectedRepositoryDetails &&
            <RepositoryDetailsView name={props.username + '/' + selectedRepository?.name} details={selectedRepositoryDetails}/>}
        </div>
    )
}