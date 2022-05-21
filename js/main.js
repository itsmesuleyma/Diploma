let zInterval = -1200,
		lastPosition = 240,
		$shots = document.getElementsByClassName('shot'),
		shots = Array.from($shots),
		zValue = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			difference = lastPosition - top

	lastPosition = top

	shots.forEach(function(n, i) {
		zValue.push((i * zInterval) + zInterval)
		zValue[i] += difference * -5.5
		let shot = shots[i],
				transform = `translateZ(${zValue[i]}px)`,
				opacity = zValue[i] < Math.abs(zInterval) / 1 ? 1 : 0
		shot.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})
}
window.scrollTo(0, 1)
