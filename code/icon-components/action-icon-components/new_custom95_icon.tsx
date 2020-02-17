
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom95_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m28.4 10.2v-3.4h0.8c1.3 0 2.4-1 2.4-2.4 0-1.3-1-2.4-2.4-2.4h-6.4c-1.3 0-2.4 1-2.4 2.4 0 1.3 1 2.4 2.4 2.4h0.8v3.4c-9.9 1.2-17.6 9.6-17.6 19.8 0 11 9 20 20 20s20-9 20-20c0-10.2-7.7-18.6-17.6-19.8z m-2.4 35c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2 15.2 6.8 15.2 15.2-6.8 15.2-15.2 15.2z m5.3-23.4l-3.7 3.7c-0.5-0.2-1-0.3-1.6-0.3-2.6 0-4.8 2.2-4.8 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8c0-0.6-0.1-1.1-0.3-1.6l3.7-3.7c0.8-0.8 0.8-2.1 0-2.9-0.8-0.8-2.1-0.8-2.9 0z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom95_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  