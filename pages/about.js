import styles from "../styles/Home.module.css";
import Layout from "../hoc/Layout";
import { Button, Container } from "@mui/material";

export default function Home() {
	return (
		<Layout route="/" title="About Alex">
			<Container
				maxWidth="xxl"
				sx={{
					height: "100vh",
					width: "100vw",
					flex: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(0,0,0,.5)",
				}}
			>
				<h1 className={styles.title}>I am Alex</h1>
				<Button>Click me</Button>
			</Container>
		</Layout>
	);
}
