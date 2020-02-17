
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom63_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m42 60h16c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v16c0 1.1 0.9 2 2 2z m35-7c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-6h5c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-1c0-3.3-2.7-6-6-6h-1v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-6v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-6v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-1c-3.3 0-6 2.7-6 6v1h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v6h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v6h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v1c0 3.3 2.7 6 6 6h1v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h6v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h6v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h1c3.3 0 6-2.7 6-6v-1h5c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-6h5z m-11 10c0 1.7-1.3 3-3 3h-26c-1.7 0-3-1.3-3-3v-26c0-1.7 1.3-3 3-3h26c1.7 0 3 1.3 3 3v26z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom63_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  