import React, { Component } from "react";

class KommunicateChat extends Component {
   constructor(props){
       super(props);
   } 
componentDidMount(){
    (function(d, m){
        var kommunicateSettings = {"appId":"31fd68ece1d068a7f44f69dc536b1fb3a","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; 
        h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
}
render(){
   return(
       <div>
        <br /> <br /> <br />
     </div>
   )
}
}
export default KommunicateChat;