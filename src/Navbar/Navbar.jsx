import {Option} from './Option'
import {OptionMenu} from './OptionMenu'
import { Searchbar } from './Searchbar';
export function Navbar()
{
    return (
        <nav>
            <i className="fa-solid fa-ghost" id="AppIcon">Code<br/>Ghost</i>
            <OptionMenu name="About Me"optionsArray={
                [
                    <Option name="Profile" key="Profile"/>,
                    <Option name="Videos" key="Videos"/>
                ]
            }/>
            <OptionMenu name="Merch"optionsArray={
                [
                    <Option name="Shirts" key="Shirts"/>,
                    <Option name="Sweaters" key="Sweaters"/>,
                    <Option name='Mugs' key="Mugs"/>
                ]
            }/>
            <div id="LoginButton" className='icon'><i className="fa-regular fa-user"> </i> &nbsp; Login</div>
            <Searchbar/>
        </nav>
    );
}