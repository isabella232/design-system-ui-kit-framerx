
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_notebook_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44 2h-30c-2.2 0-4 1.8-4 4v3h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v8h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v8h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v3c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4v-40c0-2.2-1.8-4-4-4z m-7 34c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v2z m2-8c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2z m2-10c0 0.6-0.4 1-1 1h-22c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h22c0.6 0 1 0.4 1 1v6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(new_notebook_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  