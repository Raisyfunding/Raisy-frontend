import React, { useEffect, useState } from "react";
import { Screen } from "../../styles/globalStyles";
import { useColorModeValue } from "@chakra-ui/react";
import fullpage from "../../components/Fullpage/fullpage";
import Landing from "./components/Landing";
import Popular from "./components/Popular/Popular";
import WhyRaisy from "./components/WhyRaisy";
import FooterPage from "./FooterPage";
import { useApi } from "./../../api";
import { useSelector } from "react-redux";

function Landingpage() {
	const { fetchAllCampaigns } = useApi();
	const [allCampaigns, setAllCampaigns] = useState([]);

	const { authToken } = useSelector((state) => state.ConnectWallet);

	useEffect(() => {
		new fullpage("#fullpage", {
			licenseKey: "ED0D5DA5-596F41E0-B51F15B6-293EC91D",
		});
	}, []);

	useEffect(() => {
		console.log(allCampaigns);
	}, [allCampaigns]);

	useEffect(() => {
		if (authToken) {
			fetchAllCampaigns(authToken).then((campaigns) => {
				setAllCampaigns(campaigns.data);
			});
		}
	}, [authToken]);

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
					<Popular popularCampaigns={allCampaigns} />
				</div>
				<div class='section'>
					<WhyRaisy />
				</div>
				<div class='section'>
					<FooterPage />
				</div>
			</div>
		</Screen>
	);
}
export default Landingpage;
