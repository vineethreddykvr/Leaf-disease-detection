import React from "react";
import KommunicateChat from "./chatbot";
import ScrollToTopButton from "./scrolltop";
import Footer from "./footer";
import Croul from "./crousel";
import Popup from "./popup";
import Maincard from "./maincard";
import Mainc from "./maincontent";
function Home(){
    return(<>
    
    <Popup />
    <KommunicateChat />
    
    
    <br /><br />
    <Croul />
    <Mainc />
    <br /><br />
   
    <Maincard />
    <br /><br />
   <Footer />
   <ScrollToTopButton />

    </>)
}

export default Home;