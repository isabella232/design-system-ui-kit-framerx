
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom16_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m72 70h-1v-22c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v22h-6v-22c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v22h-6v-22c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v22h-6v-22c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v22h-1c-3.3 0-6 2.7-6 6v2c0 1.1 0.9 2 2 2h52c1.1 0 2-0.9 2-2v-2c0-3.3-2.7-6-6-6z m5-35.6l-24.7-13.6c-0.7-0.5-1.5-0.8-2.3-0.8-0.8 0-1.6 0.3-2.3 0.8l-24.7 13.6c-0.6 0.4-1 1-1 1.7v1.9c0 1.1 0.9 2 2 2h52c1.1 0 2-0.9 2-2v-1.8c0-0.7-0.4-1.4-1-1.8z m-27 1.6c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom16_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  