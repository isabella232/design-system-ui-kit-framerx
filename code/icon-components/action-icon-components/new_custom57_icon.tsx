
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom57_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m28.4 29v20.2c0 0.7 0.7 1 1.2 0.7 3.9-2.2 15.8-9.1 15.8-9.1 1.5-0.9 2.5-2.6 2.5-4.4v-18.1c0-0.7-0.7-1-1.2-0.7l-17.5 10c-0.4 0.3-0.8 0.8-0.8 1.4z m-1.6-5.7l17.6-10c0.6-0.3 0.6-1.1 0-1.4-3.9-2.2-15.9-9.2-15.9-9.2-1.5-0.9-3.5-0.9-5.1 0 0 0-12 6.9-15.9 9.2-0.5 0.3-0.5 1.1 0.1 1.4l17.6 10c0.5 0.3 1.1 0.3 1.6 0z m-4.1 4.2l-17.5-10c-0.5-0.3-1.2 0.1-1.2 0.8v18.1c0 1.8 1 3.5 2.5 4.4 0 0 11.9 6.9 15.8 9.1 0.6 0.3 1.2-0.1 1.2-0.7v-20.2c0.1-0.6-0.3-1.1-0.8-1.5z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom57_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  