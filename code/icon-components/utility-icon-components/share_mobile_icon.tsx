
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function share_mobile_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m42 50.4c2.2 0 4-1.8 4-4v-26.9c0-2.2-1.8-4-4-4h-7.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h4c0.8 0 1.5 0.7 1.5 1.5v19.9c0 0.8-0.7 1.5-1.5 1.5h-25c-0.8 0-1.5-0.7-1.5-1.5v-19.9c0-0.8 0.7-1.5 1.5-1.5h4c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-7.5c-2.2 0-4 1.8-4 4v26.9c0 2.2 1.8 4 4 4h32z m-13-19.5v-19.4h5.9c1 0 1.5-0.9 0.9-1.4l-9-8.3c-0.4-0.3-1-0.3-1.4 0l-9 8.3c-0.6 0.6-0.1 1.4 0.9 1.4h5.7v19.4c0 0.8 0.7 1.6 1.5 1.6h3c0.8 0 1.5-0.8 1.5-1.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(share_mobile_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  