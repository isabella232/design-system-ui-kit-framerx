
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom80_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m9.7 33.7c-4.3 0-7.7 3.4-7.7 7.7s3.5 7.6 7.7 7.6 7.7-3.4 7.7-7.7-3.4-7.6-7.7-7.6z m0 10.7c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1z m32.6-10.7c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.6 7.7 7.6 7.7-3.4 7.7-7.7-3.5-7.6-7.7-7.6z m0 10.7c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1z m-0.5-15.3c1.7-0.1 3.3 0.2 4.9 0.8 0.8 0.3 1.6-0.1 2-0.8 3.9-7.4-2.4-10.9-6.4-12.9-1.1-0.5-2.3 0.2-2.3 1.4v4.4c0 0.9-0.6 1.8-1.5 1.7-5.7-0.9-10.8-6.9-17-6.9s-7 6.1-7 6.1c-4.3 0-8.6-0.3-10.5-0.8-1.1-0.1-2 0.6-2 1.6 0 0 0 5.4 7.7 5.4 6.3 0 11.6 4.6 12.3 10.9 0.2 1.7 0 3.4-0.5 4.8-0.2 0.5 0.2 1.1 0.9 1.1h7.1c0.6 0 1-0.5 0.9-1.1-0.5-1.5-0.6-3-0.5-4.6 0.6-6 5.7-10.9 11.9-11.1z m-39.8-5.4z m20.4-11.9c0.1 0.6 0.5 1.1 1.1 1.3l8.2 2.8c0.8 0.2 1.5-0.1 1.9-0.8l0.7-1.3c0.3-0.5-0.1-1.1-0.6-1.2-2.4-0.2-7.4-1.1-6-3.8 1.3-2.3 4-1.7 5.8-0.9 0.7 0.3 1.4-0.5 1.1-1.1-1.2-2.5-3.9-4-6.7-3.7-3.6 0.4-6.2 3.9-5.7 7.5l0.2 1.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom80_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  