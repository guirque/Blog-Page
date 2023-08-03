export function Option({name, eventHandler})
{
    return (
        <li className="Option" onClick={eventHandler}>{name}</li>
    );
}