
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom3_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m50 38c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z m30 12c0-3.5-8.4-5.3-9.7-8.4-1.3-3.2 3.3-10.4 0.9-12.8-2.4-2.4-9.6 2.2-12.8 0.9-3.1-1.3-4.9-9.7-8.4-9.7s-5.3 8.4-8.4 9.7c-3.2 1.3-10.4-3.3-12.8-0.9-2.4 2.4 2.2 9.6 0.9 12.8-1.3 3.1-9.7 4.9-9.7 8.4s8.4 5.3 9.7 8.4c1.3 3.2-3.3 10.4-0.9 12.8 2.4 2.4 9.6-2.2 12.8-0.9 3.1 1.3 4.9 9.7 8.4 9.7s5.3-8.4 8.4-9.7c3.2-1.3 10.4 3.3 12.8 0.9 2.4-2.4-2.2-9.6-0.9-12.8 1.3-3.1 9.7-4.9 9.7-8.4z m-30 18c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom3_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  