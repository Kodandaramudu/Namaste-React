const heading = [React.createElement("div",{id:"parent"},
                React.createElement("h1",{id:"heading"},"I'm h1 Tag"),
                React.createElement("h2",{id:"heading"},"I'm h2 Tag")),
                React.createElement("div",{id:"child"},
                React.createElement("h2",{id:"heading"},"I'm h2 Tag"),   
                React.createElement("h2",{id:"heading"},"I'm h2 Tag")),]

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);