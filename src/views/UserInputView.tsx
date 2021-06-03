import { components } from "@octokit/openapi-types";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { RepositoriesListView } from "./RepositoriesListView";

export function UserInputView() {
    const [username, setUsername] = useState("")
    const [repositories, setRepositories] = useState<components["schemas"]["repository"][]>();
    const [message, setMessage] = useState<string>()

    const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setUsername(e.target.value)
        setRepositories(undefined)
        setMessage(undefined)
    }

    const fetchRepositories = (e: React.SyntheticEvent) => {
        axios.get<components["schemas"]["repository"][]>(`https://api.github.com/users/${username}/repos`)
        .then(function (response) {
            console.log(response);
            setRepositories(response.data)
        })
        .catch(function (error) {
            console.error(error);
            setMessage(error.message)
        })

        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className="user-input">
            <form onSubmit={fetchRepositories}>
              <input type="text" data-testid="user-input-field" placeholder="Enter Github username" value={username} onChange={onChange} />
              <button data-testid='user-input-submit' type={'submit'}>Fetch Respositories</button>
            </form>
            {message && <p className='message'>{message}</p>}
            {repositories && <RepositoriesListView key={username} repositories={repositories} username={username}/>}
        </div>
      );
}