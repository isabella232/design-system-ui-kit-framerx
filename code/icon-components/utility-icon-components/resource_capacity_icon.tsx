
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function resource_capacity_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m37.9 25c-6.7 0-12.1 5.5-12.1 12.2s5.4 12.1 12.1 12.1 12.1-5.5 12.1-12.1-5.4-12.2-12.1-12.2z m8.5 13.4h-8.8v-9.3s3.3-0.2 6.3 2.9 2.5 6.4 2.5 6.4z m-24.2-1.1c0-2.7 0.9-5.9 2.3-8.3 1.7-3 3.6-4.2 5.1-6.5 2.5-3.7 3-9.1 1.4-13.1-1.6-4.1-5.4-6.5-9.9-6.4-4.4 0.1-8.1 2.8-9.5 7-1.6 4.5-0.9 10 2.7 13.4 1.5 1.4 2.9 3.6 2.1 5.8-0.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.7 4.1-9.5 8.8-0.8 3.8 1.8 7.8 5.9 7.8h17.1c0.8 0 1.3-1 0.8-1.6-2.3-3-3.7-6.7-3.7-10.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(resource_capacity_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  