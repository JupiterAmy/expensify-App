import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             <p>This is private message!! Don't share!!</p>
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

//const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo info="This is some info" />, document.getElementById('app'));

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to see the message</p>}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is authenticated result!!" />, document.getElementById('app'));
