import {useEffect, useRef, useState} from 'react';
import anime, {animate} from 'animejs';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const ref = useRef<HTMLDivElement>(null);
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const [animation, setAnimation] = useState<anime.JSAnimation | null>(null);

	// Using a useEffect, because anime needs to get the ref once it's mounted
	useEffect(() => {
		setAnimation(() => {
			return animate(ref.current!, {
				translateX: 270,
				loop: true,
				easing: 'easeInOutQuad',
				autoplay: false,
				duration: 900,
			});
		});
	}, []);

	useEffect(() => {
		if (!animation) {
			return;
		}
		animation.seek((frame / fps) * 1000);
	}, [animation, fps, frame]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				ref={ref}
				style={{
					height: 200,
					width: 200,
					backgroundColor: '#0b84f3',
					borderRadius: 100,
				}}
			/>
		</AbsoluteFill>
	);
};
