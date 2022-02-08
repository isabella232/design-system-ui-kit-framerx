
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom56_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m36.2 10.3c-5 5-11.1-1.1-16.7 4.5l-16.1 16c-1.8 1.8-1.8 4.8 0 6.6l5.6 5.6 5.6 5.6c1.8 1.8 4.8 1.8 6.6 0l16.2-16.1c5.6-5.6-0.6-11.7 4.5-16.7l1.3-1.3c0.3-0.3 0.3-0.8 0-1.1l-4.5-4.4c-0.3-0.3-0.8-0.3-1.1 0l-1.4 1.3z m-3.9 20.5l-5.6 5.6c-0.6 0.6-1.6 0.6-2.2 0l-4.5-4.5-4.5-4.5c-0.6-0.6-0.6-1.6 0-2.2l5.6-5.6c0.6-0.6 1.6-0.6 2.2 0l4.5 4.5 4.5 4.5c0.7 0.6 0.7 1.6 0 2.2z m17.2-25l-1.7-1.7-1.7-1.7c-0.6-0.6-1.6-0.6-2.2 0l-2.1 2.1c-0.3 0.3-0.3 0.8 0 1.1l4.4 4.4c0.3 0.3 0.8 0.3 1.1 0l2.1-2c0.8-0.5 0.8-1.5 0.1-2.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom56_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  