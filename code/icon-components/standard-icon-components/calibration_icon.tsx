
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function calibration_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m31.9 49.7c-0.6 0.1-1.2 0.1-1.9 0.1-0.6 0-1.2 0-1.9-0.1-0.6-0.1-1.1 0.4-1.1 1v27.3c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-27.3c0-0.7-0.5-1.1-1.1-1z m20 21c-0.6 0.1-1.2 0.1-1.9 0.1-0.6 0-1.2 0-1.9-0.1-0.6-0.1-1.1 0.4-1.1 1v6.3c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-6.3c0-0.7-0.5-1.1-1.1-1z m20-15c-0.6 0.1-1.2 0.1-1.9 0.1-0.6 0-1.2 0-1.9-0.1-0.6-0.1-1.1 0.4-1.1 1v21.3c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-21.3c0-0.7-0.5-1.1-1.1-1z m-38.9-25v-8.7c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v8.7c-2.4 1.1-4 3.5-4 6.3 0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.8-1.6-5.2-4-6.3z m20 21v-29.7c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v29.7c-2.4 1.1-4 3.5-4 6.3 0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.8-1.6-5.2-4-6.3z m20-15v-14.7c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v14.7c-2.4 1.1-4 3.5-4 6.3 0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.8-1.6-5.2-4-6.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(calibration_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  