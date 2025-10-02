import React from "react";
const Hello = ()=> {
    return React.createElement(
        'div',
        null,
        React.createElement('hi',
            null,
            'Hello World'
        )
    )
}
export default Hello();