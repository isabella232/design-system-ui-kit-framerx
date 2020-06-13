
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function edit_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m48.8 7.4l-4.2-4.2c-1.6-1.6-4.1-1.6-5.6 0l-3.3 3.3c-0.4 0.4-0.4 1 0 1.4l8.5 8.5c0.4 0.4 1 0.4 1.4 0l3.3-3.3c1.5-1.6 1.5-4.1-0.1-5.7z m-15.9 3.3c-0.4-0.4-1-0.4-1.4 0l-26.1 26.1-3.3 11.3c-0.3 1.1 0.7 2.2 1.8 1.9l11.4-3.2h-0.1l26.1-26.1c0.4-0.4 0.4-1 0-1.4l-8.4-8.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(edit_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  