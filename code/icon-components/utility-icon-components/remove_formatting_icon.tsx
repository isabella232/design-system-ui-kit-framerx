
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function remove_formatting_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45.1 40.9l4.6-4.6c0.4-0.4 0.4-1 0-1.4l-2.8-2.8c-0.4-0.4-1-0.4-1.4 0l-4.5 4.7-4.3-4.3c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8c-0.4 0.4-0.4 1 0 1.4l4.3 4.3-4.2 4.2c-0.4 0.4-0.4 1 0 1.4l2.8 2.8c0.4 0.4 1 0.4 1.4 0l4.2-4.2 4.5 4.5c0.4 0.4 1 0.4 1.4 0l2.8-2.8c0.4-0.4 0.4-1 0-1.4l-4.6-4.6z m-40.3-32.9h10.8l-4.1 23.2c-0.2 1 0.5 1.8 1.4 1.8h5.1c0.7 0 1.4-0.5 1.5-1.2l4.2-23.8h11c0.7 0 1.4-0.5 1.5-1.3l0.5-3c0.2-0.9-0.5-1.7-1.5-1.7h-30c-0.7 0-1.3 0.5-1.4 1.3l-0.5 3c-0.2 0.9 0.5 1.7 1.5 1.7z m23.2 30.5c0-0.8-0.7-1.5-1.5-1.5h-23c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h23c0.8 0 1.5-0.7 1.5-1.5v-3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(remove_formatting_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  