import Container from "@mui/material/Container";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Stack } from "@mui/material";

const Footer = ({ route }) => {
	const [activeStep, setActiveStep] = React.useState(0);

	return (
		<Container
			maxWidth="xxl"
			sx={{
				position: "sticky",
				left: 0,
				bottom: 0,
				height: "80px",
				width: "100vw",
				textAlign: "center",
				margin: "auto",
			}}
		>
			<Stack direction={"column"}>
				<MobileStepper
					variant="dots"
					steps={5}
					position="static"
					activeStep={activeStep}
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						backgroundColor: "rgba(0,0,0,0)",
						color: "white",
					}}
				/>
				<Stack
					direction={"row"}
					sx={{
						flexGrow: 1,
						justifyContent: "center",
					}}
				>
					<Button>back</Button>
					<Button>next</Button>
				</Stack>
			</Stack>
		</Container>
	);
};

export default Footer;
