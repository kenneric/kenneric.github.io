import { useRef, useEffect } from 'react';

var started = false;

export default function AudioVisualizer(props) {
	const canvasRef = useRef(null);
	const audioRef = useRef(null);

	useEffect(() => {
		const canvas = document.querySelector('canvas');
		const audio = document.querySelector('audio');

		console.log(audio);
		console.log(canvas);

		
		if(!started){
			started = true;

			const context = new AudioContext();

			var src = context.createMediaElementSource(audio);
			var analyser = context.createAnalyser();
		
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			var ctx = canvas.getContext("2d");
		
			src.connect(analyser);
			analyser.connect(context.destination);
		
			analyser.fftSize = 256;
		
			var bufferLength = analyser.frequencyBinCount;
			console.log(bufferLength);
		
			var dataArray = new Uint8Array(bufferLength);
		
			var WIDTH = canvas.width;
			var HEIGHT = canvas.height;
		
			var barWidth = (WIDTH / bufferLength) * 2.5;
			var barHeight;
			var x = 0;

			function renderFrame() {
				requestAnimationFrame(renderFrame);
		  
				x = 0;
		  
				analyser.getByteFrequencyData(dataArray);
		  
				ctx.fillStyle = "#000";
				ctx.fillRect(0, 0, WIDTH, HEIGHT);
		  
				for (var i = 0; i < bufferLength; i++) {
				  barHeight = dataArray[i];
				  
				  var r = barHeight + (25 * (i/bufferLength));
				  var g = 250 * (i/bufferLength);
				  var b = 50;
		  
				  ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
				  ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
		  
				  x += barWidth + 1;
				}
			  }
		  
			  renderFrame();
		}
	});

	return <div>
				<audio ref={audioRef} src={props.url} type="audio/mp3" controls></audio>
	  			<canvas ref={canvasRef} width={props.width} height={props.height} />
			</div>;
}