export function RepositoryItem(props){
    const repository = props.repository
    return (
        <li>
            <strong>{repository ? repository.name : 'Default'}</strong>
            <p>Forms in React</p>
            <a href={props.repository.html_url}>
                Acessar repositórios
            </a>
        </li>
    )
}