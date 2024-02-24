import React, { Component } from "react";

class KommunicateChat extends Component {
    componentDidMount() {
        // Check if Kommunicate is already loaded
        if (!window.kommunicate) {
            (function (d, m) {
                var kommunicateSettings = {
                    appId: "31fd68ece1d068a7f44f69dc536b1fb3a",
                    popupWidget: true,
                    automaticChatOpenOnNavigation: true
                };
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0].appendChild(s);
                window.kommunicate = m;
                m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        } else {
            // If Kommunicate is already loaded, just set globals
            window.kommunicate._globals = {
                appId: "31fd68ece1d068a7f44f69dc536b1fb3a",
                popupWidget: true,
                automaticChatOpenOnNavigation: true
            };
        }
    }

    render() {
        return (
            <div>
                {/* Your chat widget can be placed here or elsewhere in your component */}
                <br /> <br /> <br />
            </div>
        );
    }
}

export default KommunicateChat;
