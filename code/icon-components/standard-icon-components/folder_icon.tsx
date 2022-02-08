
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function folder_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m75 34.7h-28.4c-1.8 0-3.4-1-4.4-2.5l-4.4-7.6c-0.8-1.6-2.4-2.6-4.3-2.6h-8.5c-2.8 0-5 2.3-5 5.1v45.8c0 2.8 2.2 5.1 5 5.1h50c2.8 0 5-2.3 5-5.1v-33.1c0-2.8-2.2-5.1-5-5.1z m0-10.2h-30.1c-0.5 0-0.8 0.5-0.5 0.9l2 3.4c0.2 0.5 0.6 0.8 1.1 0.8h27.5c1.4 0 2.8 0.3 3.9 0.8 0.5 0.3 1.1-0.1 1.1-0.8 0-2.8-2.2-5.1-5-5.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(folder_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  