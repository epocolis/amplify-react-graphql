import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
	withAuthenticator,
	Button,
	Heading,
	Image,
	View,
	Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
	return (
		<View className="App">
			<Card>
				<Heading level={1}> Coming soon, the flamel ui</Heading>
			</Card>
			<Button onClick={signOut}>Sign Out</Button>
		</View>
	);
}

export default withAuthenticator(App);
