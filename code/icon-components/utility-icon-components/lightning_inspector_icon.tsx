
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function lightning_inspector_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m40.9 23.6h-0.5v-0.8c0-5-4.1-9.1-9.1-9.1-2.4 0-4.5 0.9-6.1 2.4-1.3-3.4-4.6-5.9-8.5-5.9-5 0-9.1 4.1-9.1 9.1 0 1.7 0.5 3.2 1.2 4.6-4 1-6.9 4.5-6.9 8.8 0 4.9 3.8 8.8 8.7 9h30.2c5 0 9.1-4.1 9.1-9.1s-4-9-9-9z m-24.6 0.8l7.8-3.7c0.3-0.2 0.8-0.2 1.1 0l7.8 3.7c0.5 0.2 0.5 0.8 0 1.1l-7.8 3.7c-0.3 0.2-0.8 0.2-1.1 0l-7.8-3.7c-0.4-0.2-0.4-0.9 0-1.1z m16.8 9.2l-7.8 3.7c-0.3 0.2-0.8 0.2-1.1 0l-7.8-3.7c-0.5-0.2-0.5-0.8 0-1.1l1-0.5c0.1-0.1 0.3-0.1 0.5 0l6.3 3c0.3 0.2 0.8 0.2 1.1 0l6.2-3c0.1-0.1 0.3-0.1 0.5 0l1 0.5c0.5 0.2 0.5 0.9 0.1 1.1z m0-4l-7.8 3.7c-0.3 0.2-0.8 0.2-1.1 0l-7.8-3.7c-0.5-0.2-0.5-0.8 0-1.1l1.1-0.5c0.1-0.1 0.3-0.1 0.5 0l6.2 3c0.3 0.2 0.8 0.2 1.1 0l6.2-3c0.1-0.1 0.3-0.1 0.5 0l1.1 0.5c0.4 0.2 0.4 0.8 0 1.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(lightning_inspector_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  