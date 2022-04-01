import styles from "../styles/Home.module.css";
import Layout from "../hoc/Layout";
import { Button, Container } from "@mui/material";
import Footer from "../Components/Footer";

export default function Home() {
	return (
		<main className={styles.main}>
			<Container
				maxWidth="xxl"
				sx={{
					bgcolor: "#cfe8fc",
					minHeight: "100%",
					flex: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1 className={styles.title}>Alex's Portfolio</h1>
				<Button>Click me</Button>
			</Container>
		</main>
	);
}
