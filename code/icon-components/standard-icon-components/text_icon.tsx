
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function text_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m79.9 77.9c-0.3-4.1-0.4-8.3-0.4-12.4 0-2.1 0-4.1 0.1-6.2 0-1.9 0.2-3.8-0.5-5.6-1.6-4.1-7-4.9-10.9-4.9-2 0-4 0.3-6 0.8-1.4 0.4-2.8 0.9-4 1.5l1.3 3.2c0.3 0.6 0.4 1.3 0.5 1.9 2.6-1.2 5.2-1.9 7.8-1.9 4.1 0 6.1 1.6 6.1 4.8v1.5c-0.6 0-1.6-0.1-2.9-0.1-5.2 0-9.1 0.8-11.9 2.3-2.7 1.6-4.1 4.3-4.1 8.2 0 2.9 0.9 5.2 2.7 6.8 1.8 1.6 4.1 2.4 6.8 2.4 2.4 0 4.4-0.3 5.9-1s2.8-1.7 3.8-3.1h0.2c0.1 0.7 0.2 1.8 0.5 3.4 0 0.1 4.5 0 5 0 0.1-0.7 0-1.1 0-1.6z m-5.9-10.1c0 0.7-0.1 1.4-0.4 2.1-0.2 0.5-0.4 1-0.8 1.5-1.2 1.7-3.3 2.6-5.3 3-1.3 0.2-2.5 0.1-3.8-0.1-1-0.2-2-0.7-2.5-1.6-0.9-1.4-0.7-3.6 0.3-4.9 0.6-0.8 1.5-1.3 2.4-1.6 2.5-0.8 5.4-0.8 7.9-0.8l2.2 0.1v2.3z m-19.1-11.5l-14.2-35.2c-0.2-0.7-0.8-1.1-1.5-1.1h-4.5c-0.7 0-1.4 0.5-1.6 1.1l-13 35.2c-0.3 0.7 0.2 1.5 0.9 1.5h5c0.7 0 1.4-0.6 1.6-1.3l3.3-9.2h12.8l3.7 9.2c0.2 0.7 0.9 1.3 1.6 1.3h4.9c0.8 0 1.4-0.8 1-1.5z m-21.4-15.9l3.7-9.6 4.1 9.6h-7.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(text_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  