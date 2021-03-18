import React , {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import LandingPage from '../Components/LandingPage';
import InfoSection from '../Components/InfoSection';
import { homeObjOne, homeObjTwo } from '../Components/InfoSection/Data';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <LandingPage />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
        </>
    )
}
export default Home
