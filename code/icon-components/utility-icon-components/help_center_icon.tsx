
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function help_center_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m25.7 2c-13.3 0.2-23.8 11.1-23.7 24.3 0.2 13.3 11.1 23.8 24.3 23.7 13.3-0.2 23.8-11.1 23.7-24.3-0.2-13.3-11.1-23.8-24.3-23.7z m0 3.2c3.6-0.1 7 0.8 9.9 2.3l-3.2 5.4c-1.9-1-4.1-1.5-6.4-1.5s-4.5 0.5-6.4 1.5l-3.2-5.4c2.8-1.4 5.9-2.3 9.3-2.3z m-12.8 27.2l-5.4 3.2c-1.4-2.8-2.3-6-2.3-9.4-0.1-3.6 0.8-7 2.3-9.9l5.4 3.2c-1 1.9-1.5 4.1-1.5 6.4s0.5 4.6 1.5 6.5z m13.4 14.4c-3.6 0.1-7-0.8-9.9-2.3l3.2-5.4c1.9 1 4.1 1.5 6.4 1.5s4.5-0.5 6.4-1.5l3.2 5.4c-2.8 1.4-5.9 2.3-9.3 2.3z m-0.3-9.3c-6.4 0-11.5-5.2-11.5-11.5 0-6.4 5.2-11.5 11.5-11.5 6.4 0 11.5 5.2 11.5 11.5 0 6.4-5.1 11.5-11.5 11.5z m13.1-5.1c1-1.9 1.5-4.1 1.5-6.4s-0.5-4.5-1.5-6.4l5.4-3.2c1.4 2.8 2.3 6 2.3 9.4 0.1 3.6-0.8 7-2.3 9.9l-5.4-3.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(help_center_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  