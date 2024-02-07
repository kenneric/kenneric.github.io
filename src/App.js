import './App.css';
import AudioVisualizer from './AudioVisualizer';

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
				<h2>
					About
				</h2>
				<h2>
					Tracks
				</h2>
				<h2>
					Contact
				</h2>
				<h2>
					Clients
				</h2>
			</div>

			<div className="container rounded">
				<div className="profile">
					<div className="profile-name"> 
						<h3>
							Jack City
						</h3>
					</div>
					<div className="profile-image rounded"></div>
					<AudioVisualizer height="100" width="600" url="/media/music/jack-city-changing.mp3"/>
				</div>
			</div>

			<div className="container rounded">
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

			<footer className="app-footer">
				© 2024 Eric Kennedy | kenneric.com
			</footer>
		</div>
	);
}

export default app;
