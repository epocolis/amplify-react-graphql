import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card, 
} from "@aws-amplify/ui-react"; 




function App({signOut}) {
  return (
	  <View className="App">
	  <Card>
	   <Image src={logo} classNamee="App-logo" alt="logo" />
	  <Heading level = {1}> We now have Auth! V2</Heading>
	  
          </Card>
    	  <Button onClick={signOut}>Sign Out</Button>
         </View>
  );
}

export default withAuthenticator(App);
