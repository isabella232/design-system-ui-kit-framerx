
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom45_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m33 43h34v14h-34z m49-1.7v-5.3c0-3.3-2.7-6-6-6h-52c-3.3 0-6 2.7-6 6v5.3c0 0.7 0.4 1.4 1 1.7 2.4 1.4 4 4 4 6.9 0 3-1.6 5.5-4 6.9-0.6 0.4-1 1-1 1.7v5.5c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6v-5.3c0-0.7-0.4-1.4-1-1.7-2.4-1.4-4-4-4-6.9 0-3 1.6-5.5 4-6.9 0.6-0.5 1-1.1 1-1.9z m-11 21.7h-42c-1.1 0-2-0.9-2-2v-22c0-1.1 0.9-2 2-2h42c1.1 0 2 0.9 2 2v22c0 1.1-0.9 2-2 2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom45_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  