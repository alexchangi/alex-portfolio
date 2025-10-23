import styles from "../styles/Home.module.css";
import Layout from "../hoc/Layout";
import { Button, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

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
                <Typography variant="h5" sx={{ mt: 3, mb: 1, color: "white" }}>
                    CV / Work
                </Typography>
                <List sx={{ width: "100%", maxWidth: 720, bgcolor: "rgba(0,0,0,0)" }}>
                    <ListItem disableGutters>
                        <ListItemText
                            primary="Jam Cyber"
                            secondary="Cyber and It Operations Manager — December 2024 – present"
                            primaryTypographyProps={{ sx: { color: "white", fontWeight: 600 } }}
                            secondaryTypographyProps={{ sx: { color: "white" } }}
                        />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText
                            primary="Benchmarking"
                            secondary="Product Owner / Designer / Scrum Master"
                            primaryTypographyProps={{ sx: { color: "white", fontWeight: 600 } }}
                            secondaryTypographyProps={{ sx: { color: "white" } }}
                        />
                    </ListItem>
                </List>
                <Button sx={{ mt: 2 }}>Click me</Button>
            </Container>
		</Layout>
	);
}
