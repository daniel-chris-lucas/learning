import React from 'react';

class App extends React.Component {
    render() {
        // Return can only return one node.
        // Nest multiple nodes inside base node.
        return (
            <div>
                <h1>Hello World</h1>
                <b>Bold</b>
            </div>
        );

        // Can also be written like this :
        // return <div>
        //     <h1>Hello World</h1>
        //     <b>Bold</b>
        // </div>
    }
}

export default App;
