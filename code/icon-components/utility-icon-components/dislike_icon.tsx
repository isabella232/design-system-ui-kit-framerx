
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function dislike_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m12 29.5v-20.5c0-2.2-1.8-4-4-4h-2.5c-0.8 0-1.5 0.7-1.5 1.5v23c0 0.8 0.7 1.5 1.5 1.5h5c0.8 0 1.5-0.7 1.5-1.5z m36-3.5v-12.5c0-8.7-6.9-9.5-14.4-9.5-7.1 0-9.4 2.7-16.2 3-0.8 0-1.4 0.7-1.4 1.5v20c0 0.8 0.7 1.5 1.5 1.5 4.8 0 8.5 5.2 8.5 10.5v6c0 0.8 0.7 1.5 1.5 1.5h2.5c2.2 0 4-1.8 4-4v-10c0-2.2 1.8-4 4-4h6c2.2 0 4-1.8 4-4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(dislike_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  