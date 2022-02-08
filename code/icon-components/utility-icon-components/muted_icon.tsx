
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function muted_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.5 5.6l-2.1-2.1c-0.6-0.6-1.7-0.5-2.4 0.3l-10 10v-3.9c0-4.4-3.5-7.9-7.9-7.9h-0.2c-4.4 0-7.9 3.5-7.9 7.9v14.5c0 1.5 0.4 3 1.2 4.2l-3.5 3.5c-1.7-2.1-2.7-4.8-2.7-7.7v-4c0-1.4-1.1-2.4-2.5-2.4s-2.5 1-2.5 2.4v4c0 4.3 1.6 8.2 4.2 11.2l-8.4 8.4c-0.7 0.7-0.8 1.8-0.3 2.4l2.1 2.1c0.6 0.6 1.7 0.5 2.4-0.3l40.2-40.2c0.8-0.7 0.9-1.8 0.3-2.4z m-9.5 17.6v1.2c0 7-5.8 12.8-13 12.8h-0.9l-3.9 4.1c0.8 0.2 1.8 0.4 2.8 0.6v3.1h-4.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h13.1c1.4 0 2.5-1.1 2.5-2.5s-1.2-2.5-2.6-2.5h-4.5v-3.2c9-1.2 16-8.6 16-17.4v-4c0-0.6-0.3-1.2-0.6-1.6l-4.4 4.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(muted_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  