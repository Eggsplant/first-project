import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import C1 from './myselfComponent/C1.js';
import C2 from './myselfComponent/C2.js';
import C3 from './myselfComponent/C3.js';
import NameForm from './myselfComponent/formtest.js';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//     <div>嘿嘿嘿</div>,
//     document.getElementById("root")
// );


// ReactDOM.render(
//     <div>
//         <C1 name="red" num="01"></C1>
//         <App/>
//         <C2/>
//     </div>
//     , document.getElementById('root1'));

    ReactDOM.render(
        <div>
            <App/>
            {/*<C1 name="'名字'" num="2"></C1><hr/>*/}
            {/*<C2></C2><hr/>*/}
            {/*<C3/>*/}
            <NameForm/>
        </div>
        ,document.getElementById("root"));
registerServiceWorker();
