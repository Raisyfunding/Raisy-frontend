import React, { useEffect } from "react";
import { Screen } from "../../styles/globalStyles";
import { useColorModeValue } from "@chakra-ui/react";
import fullpage from "../../components/Fullpage/fullpage";
import Landing from "./components/Landing";
import Popular from "./components/Popular/Popular";

function Landingpage() {
	useEffect(() => {
		new fullpage("#fullpage", {
			licenseKey: "ED0D5DA5-596F41E0-B51F15B6-293EC91D",
		});
	}, []);

	return (
		<Screen
			style={{
				backgroundColor: useColorModeValue("var(--white)", "var(--black)"),
			}}>
			<div id='fullpage'>
				<div class='section'>
					<Landing />
				</div>
				<div class='section'>
					<Popular />
				</div>
			</div>
		</Screen>
	);
}
export default Landingpage;
