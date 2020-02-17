
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom81_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47.5 2c-0.8 0-3.1 0.1-3.9 0.1-12.3 0.6-26.5 3.7-27.2 3.9-1 0.3-1.6 1.3-1.6 2.2v26.2c-0.8-0.3-2.1-0.5-3.2-0.5-5.3 0-9.6 3.6-9.6 8s4.3 8 9.6 8 9.6-3.6 9.6-8v-16.3c0-0.7 0.5-1.4 1.2-1.5 3.9-1 9.4-2 19.5-2.6 1-0.1 1.7 0.6 1.7 1.6v8.3c-0.8-0.3-2.1-0.5-3.2-0.5-5.3 0-9.6 3.6-9.6 8s4.3 8 9.6 8 9.6-3.6 9.6-8v-34.5c0-1.4-1.1-2.5-2.5-2.4z m-5.4 12.7c-9.8 0.6-14.7 1.5-19 2.5-1 0.2-1.9-0.6-1.9-1.6v-2.5c0-0.7 0.5-1.4 1.3-1.6 4.2-1 9.2-2 19.4-2.6 1-0.1 1.7 0.6 1.7 1.6v2.5c0 1-0.6 1.7-1.5 1.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_custom81_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  