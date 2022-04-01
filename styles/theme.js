import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#9c27b0",
		},
		error: {
			main: "#d32f2f",
		},
		saveGreen: {
			main: "#4caf50",
		},
		dark: {
			main: "#000000",
		},
	},
});

export default theme;
