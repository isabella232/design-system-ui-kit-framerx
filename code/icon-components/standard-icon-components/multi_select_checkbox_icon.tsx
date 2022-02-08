
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function multi_select_checkbox_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73 20h-32c-3.3 0-6 2.7-6 6v1c0 0.6 0.4 1 1 1h29c3.3 0 6 2.7 6 6v31c0 0.6 0.4 1 1 1h1c3.3 0 6-2.7 6-6v-34c0-3.3-2.7-6-6-6z m-14 14h-32c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h32c3.3 0 6-2.7 6-6v-34c0-3.3-2.7-6-6-6z m-2.7 17l-15.3 15.3c-0.6 0.6-1.3 0.9-2.1 0.9-0.7 0-1.5-0.3-2.1-0.9l-7.4-7.4c-0.6-0.6-0.6-1.5 0-2.1l2.1-2.1c0.6-0.6 1.5-0.6 2.1 0l5.3 5.3 13.2-13.2c0.6-0.6 1.5-0.6 2.1 0l2.1 2.1c0.5 0.6 0.5 1.6 0 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(multi_select_checkbox_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  