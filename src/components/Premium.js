import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

const premium= () =>{
    return(
        <Authenticator>
            {({signOut})=> (
                <div>
                    <h1>Hello welcome to my Page</h1>
                    <h3>You are Authenticated .This is premium page</h3>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};
export default premium;