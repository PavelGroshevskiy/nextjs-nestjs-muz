import React from "react"
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";

const Index = () => {
	return (
		<>
		<Navbar/>
			<div className="center">
				<h1>Добро пожаловать</h1>
				<h3>Самые лучшик треки для вас</h3>
			</div>
			<style jsx>
				{`
					.center {
						display: flex;
						margin-top: 150px;
						flex-direction: column;
						align-items: center;
						justify-content: center
					}
				`}
			</style>

		</>
		
	)
}

export default Index