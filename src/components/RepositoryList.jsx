import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";


export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data =>   setRepositories(data))
    }, []);

    return  (
        <section className="repository-list">
            <h1>Lista de Repositório</h1>
            <ul>
                {repositories && repositories.map(repository => <RepositoryItem key={repository.name} repository={repository}/>)}
                
               
            </ul>
        </section>
    );
}