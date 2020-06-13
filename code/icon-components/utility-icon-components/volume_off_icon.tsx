
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function volume_off_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m24.6 2.6l-12.6 15.4h-6c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h6l12.6 15.4c1.3 1.3 3.4 0.4 3.4-1.4v-44c0-1.8-2.2-2.7-3.4-1.4z m20.2 23.4l4.9-4.9c0.4-0.4 0.4-1 0-1.4l-1.4-1.4c-0.4-0.4-1-0.4-1.4 0l-4.9 4.9-4.9-4.9c-0.4-0.4-1-0.4-1.4 0l-1.4 1.4c-0.4 0.4-0.4 1 0 1.4l4.9 4.9-4.9 4.9c-0.4 0.4-0.4 1 0 1.4l1.4 1.4c0.4 0.4 1 0.4 1.4 0l4.9-4.9 4.9 4.9c0.4 0.4 1 0.4 1.4 0l1.4-1.4c0.4-0.4 0.4-1 0-1.4l-4.9-4.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(volume_off_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  