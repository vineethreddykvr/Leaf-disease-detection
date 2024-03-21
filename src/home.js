import React from "react";
import KommunicateChat from "./chatbot";
import ScrollToTopButton from "./scrolltop";
import Footer from "./footer";
import Croul from "./crousel";
import Popup from "./popup";
import Maincard from "./maincard";
import Mainc from "./maincontent";
import UserProfile from "./userprofile"
function Home(){
    return(<>
    
    <Popup />
    {/* <KommunicateChat /> */}
    <br /><br />
    <Croul />
    <Mainc />
    <Maincard />
    <br />
    <UserProfile />
    <br /><br />
   <Footer />
   <ScrollToTopButton />

    </>)
}

export default Home;