
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function record_update_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m68.4 27.1c0.1 0 0.1 0 0 0" fill={props.fill}/>
	<g fill={props.fill}>
		<path d="m39 32h22c1.1 0 2-0.9 2-2v-4c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v4c0 1.1 0.9 2 2 2z m33-7h-2c-0.6 0-1 0.4-1 1v4c0 4.4-3.6 8-8 8h-22c-4.4 0-8-3.6-8-8v-4c0-0.6-0.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-43c0-3.3-2.7-6-6-6z m-12 30.5l-16 16h0.1l-7 2c-0.7 0.2-1.3-0.5-1.1-1.2l2-6.9 16-16c0.2-0.2 0.6-0.2 0.9 0l5.1 5.3c0.2 0.2 0.2 0.6 0 0.8z m4.6-4.6l-2 2c-0.2 0.2-0.6 0.2-0.9 0l-5.2-5.2c-0.2-0.2-0.2-0.6 0-0.9l2-2c0.9-1 2.4-1 3.4 0l2.6 2.6c1.1 1 1.1 2.5 0.1 3.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(record_update_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  