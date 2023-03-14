# AnimeJS + Remotion example

https://user-images.githubusercontent.com/1629785/225016439-7664cd6b-21bc-431f-9b33-3a5aa61c3032.mp4

<br/>
<br/>

## Sample component

```tsx
import {useEffect, useRef, useState} from 'react';
import anime from 'animejs/lib/anime.es.js';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const ref = useRef<HTMLDivElement>(null);
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const [animation, setAnimation] = useState<anime.AnimeInstance | null>(null);

	// Using a useEffect, because anime needs to get the ref once it's mounted
	useEffect(() => {
		setAnimation(() => {
			return anime({
				targets: ref.current,
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
		animation.seek(((frame / fps) * 1000) % animation.duration);
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
```

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help [on our Discord server](https://remotion.dev/discord).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
