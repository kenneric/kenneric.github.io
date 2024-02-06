import './App.css';

function app() {
return (
		<div className="app">
			<header className="app-header">
				<div className="app-header-title rounded shadow-bottom">
					<h1>
						kenneric
					</h1>
				</div>
			</header>
			<div className="tab-menu">
				<h2 className="rounded">
					Clients
				</h2>
			</div>
			<div className="container rounded shadow-bottom">
				<div className="profile">
					<div className="profile-name">
						<h3>
							Jack City
						</h3>
					</div>
					<div className="profile-image rounded"></div>
					<div className="audio-player"></div>
				</div>
			</div>
		</div>
	);
}

export default app;
