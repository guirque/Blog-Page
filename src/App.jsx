import { Navbar } from "./Navbar/Navbar";
import {Option} from './Navbar/Option';
import {OptionMenu} from './Navbar/OptionMenu';
import {Searchbar} from './Navbar/Searchbar';
import { Posts } from "./Posts/Posts";
import { Footer } from "./Footer/Footer";
import { Aside } from "./Aside/Aside";

export default function App()
{
  return (
    <>
      <Navbar/>
      <Posts/><Aside/>
      <Footer/>
    </>
  );
}