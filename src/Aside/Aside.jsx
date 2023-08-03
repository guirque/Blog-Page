export function Aside()
{
    let adExamples = [];
    for(let i = 0; i < 4; i++) adExamples.push(<div className="anAd">{'Lorem ipsum dolor sit amet, consectetur example adipiscing elit, sed do eiusmod tempor incididunt ut labore et example dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur example adipiscing elit, sed do eiusmod.'.split('example', i+1)}</div>);
    return <aside>
        {adExamples}
    </aside>
}