
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom73_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m4.8 14h42.4c1 0 1.8-1 1.5-2-1-3.3-2.4-6.3-4.3-9-0.6-0.8-1.7-0.9-2.3-0.2-1.9 1.8-4.6 2.8-7.4 2.8-3 0-5.7-1.2-7.7-3.2-0.6-0.6-1.6-0.6-2.2 0-2 2-4.7 3.2-7.7 3.2-2.8 0-5.4-1-7.4-2.8-0.6-0.6-1.6-0.5-2.2 0.3-1.9 2.6-3.4 5.7-4.3 9-0.2 0.9 0.6 1.9 1.6 1.9z m45.2 6.4c0-0.9-0.7-1.6-1.6-1.6h-44.8c-0.9 0-1.6 0.7-1.6 1.6v0.3c0 15 10.4 27.4 24 29.3 13.6-1.9 24-14.3 24-29.2v-0.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom73_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  