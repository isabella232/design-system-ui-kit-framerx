
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function lightning_usage_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m19 73.9c0 2.8 2.2 5 5 5h53c1.1 0 2-0.9 2-2v-2.1c0-1.1-0.9-2-2-2h-50.1c-1 0-1.9-0.9-1.9-1.9v-50c0-1.1-0.9-2-2-2h-2c-1.1 0-2 0.9-2 2v53z m15.4-16c-0.8 0-1.5-0.3-2.1-0.9-1.2-1.2-1.2-3.1 0-4.2l16-15.9c1.2-1.2 3.1-1.2 4.2 0l7.7 7.7 13.5-13.7c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-15.5 15.7c-0.6 0.6-1.3 0.9-2.1 0.9s-1.6-0.3-2.1-0.9l-7.8-7.7-13.8 13.9c-0.6 0.6-1.4 0.9-2.2 0.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(lightning_usage_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  