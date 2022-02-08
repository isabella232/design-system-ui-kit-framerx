
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function redo_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m35.5 12.5h0.7c1 0 1-0.7 0.4-1.3l-4.9-4.9c-0.6-0.5-0.6-1.5 0-2.1l2.1-2.1c0.5-0.6 1.5-0.6 2.1 0l12.9 12.9c0.5 0.5 0.5 1.3 0 1.8l-13 13c-0.6 0.5-1.3 0.5-1.9-0.1l-2.2-2.2c-0.6-0.6-0.7-1.5-0.1-2.1l4.9-4.9c0.7-0.7 0.9-1.3 0.1-1.7-0.3-0.1-1.1-0.1-1.1-0.1h-13.9c-7.1 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8h8.1c0.8 0 1.4 0.7 1.4 1.5v3.2c0 0.8-0.5 1.4-1.3 1.4h-8.2c-10.4 0-18.9-8.4-18.9-18.9s8.5-18.9 18.9-18.9l13.9-0.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(redo_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  