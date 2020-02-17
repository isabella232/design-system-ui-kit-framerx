
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom72_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m47.6 2h-43.2c-1.4 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4h19.2v5c-8.6 1.1-15.2 8.4-15.2 17.3v5.5c0 5.8 4.6 10.6 10.6 10.6h14.2c5.8 0 10.5-4.7 10.5-10.6v-5.6c0-8.9-6.6-16.2-15.2-17.4v-4.8h19.2c1.4 0 2.4-1 2.4-2.4s-1.1-2.4-2.5-2.4z m-10.4 27c0 0.1 0 0 0 0 0 2.3-1.8 4.2-4.2 4.2h-14c-2.3 0-4.1-1.8-4.2-4.2v0.1-0.1 0.1c0.1-6.2 5-11.1 11-11.1h0.3c6.1 0 11 5 11.1 11z"/>
		<circle cx="6.8" cy="46.8" r="3.2"/>
		<circle cx="45.2" cy="46.8" r="3.2"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom72_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  