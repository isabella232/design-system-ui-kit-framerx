
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom15_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m42 22.9c-2.8-1.2-3.2-2.2-3.2-3.4 0-1.2 0.8-2.2 1.8-3.1 1.7-1.5 2.6-3.6 2.6-6 0-4.5-2.8-8.4-7.9-8.4-4.3 0-7 2.9-7.7 6.6-0.1 0.3 0.1 0.6 0.3 0.8 3.6 2.6 5.8 6.9 5.8 12.1 0 3.6-1.2 6.9-3.4 9.4-0.3 0.4-0.2 1 0.3 1.3 1.4 0.6 3 1.4 4.6 2.2 0.5 0.3 1 0.5 1.6 0.5h9.2c2.2 0 4-1.8 4-3.9v-0.6c0-3.8-3.9-5.8-8-7.5z m-14.3 13.2c-3.4-1.4-3.8-2.6-3.8-4s1-2.6 2.1-3.7c1.9-1.8 3-4.2 3-7 0-5.3-3.4-9.8-9.3-9.8s-9.3 4.6-9.3 9.8c0 2.9 1 5.3 3 7 1.1 1 2.1 2.3 2.1 3.7 0 1.4-0.5 2.6-3.8 4-4.9 2-9.5 4.3-9.6 8.6v0.7c-0.1 2.5 2.1 4.6 4.8 4.6h25.6c2.6 0 4.8-2.1 4.8-4.6v-0.7c-0.1-4.3-4.7-6.6-9.6-8.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom15_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  