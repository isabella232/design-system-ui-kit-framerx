
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function client_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m44.8 58.3c3.7-2.1 7.2-3.1 11.1-3.1 1.1 0 2.2 0.1 3.2 0.2 0.5 0.1 0.6-0.1 0.1-0.4-1.9-1.1-4-2.1-6.2-3-4.3-1.8-4.9-3.4-4.9-5.2 0-1.8 1.2-3.4 2.6-4.7 2.5-2.3 3.9-5.4 3.9-9.1 0-6.9-4.3-12.8-11.9-12.8-7.6 0-11.9 5.9-11.9 12.8 0 3.7 1.4 6.9 3.9 9.1 1.4 1.3 2.6 3 2.6 4.7 0 1.7-0.7 3.4-4.9 5.2-6.2 2.6-12.1 5.6-12.2 11.2 0 3.7 2.8 7 6.3 7h14.2c1.1 0 2-0.9 2-2v-6.5c0.1-1.4 0.8-2.7 2.1-3.4z m32.5 5.9c-9.4 2.9-16.8-6-27.1-1.8-0.8 0.3-1.2 1-1.2 1.9v10.7c0 1.4 1.2 2.3 2.5 1.9 10.2-3.1 17.6 5.8 27.2 1.8 0.7-0.3 1.3-1 1.3-1.9v-10.7c0-1.3-1.4-2.3-2.7-1.9z m-12.5 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
	</g>
</svg>
  );
};

addPropertyControls(client_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  