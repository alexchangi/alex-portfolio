import styles from "../styles/Home.module.css";
import Layout from "../hoc/Layout";
import { Button } from "@mui/material";

export default function Home() {
	return (
		<Layout route="/" title="Contact Alex">
			<main className={styles.main}>
				<h1 className={styles.title}>Contact Alex</h1>
				<Button>Click me</Button>
			</main>
		</Layout>
	);
}
