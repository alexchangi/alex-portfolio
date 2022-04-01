import styles from "../styles/Home.module.css";
import Layout from "../hoc/Layout";
import { Button } from "@mui/material";

export default function Home() {
	return (
		<Layout route="/" title="Alex's Projects">
			<main className={styles.main}>
				<h1 className={styles.title}>Alex's Projects</h1>
				<Button>Click me</Button>
			</main>
		</Layout>
	);
}
