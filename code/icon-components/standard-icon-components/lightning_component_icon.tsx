
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function lightning_component_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m61.1 20h-16.9c-2.5 0-4.7 1.5-5.6 3.8l-10.5 27.1c-0.8 2 0.7 4.1 2.8 4.1h17.2l-6.4 22.4c-0.6 2.1 2 3.5 3.4 1.8l26.3-31.2c1.7-1.9 0.3-5-2.3-5h-13l11.4-18.4c1.2-2-0.2-4.6-2.6-4.6h-3.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(lightning_component_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  