
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function asset_relationship_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m72.8 54.7v-0.4c0-9-5.3-16.8-12.9-20.6v-0.9c0-5.5-4.5-10-10-10s-10 4.5-10 10v0.9c-7.6 3.7-12.9 11.6-12.9 20.6v0.4c-4.1 1.2-7.2 5-7.2 9.6 0 5.5 4.5 10 10 10 2.2 0 4.3-0.7 6-2 3.9 3 8.8 4.9 14 4.9s10.1-1.8 14-4.9c1.7 1.2 3.7 2 6 2 5.5 0 10-4.5 10-10 0.2-4.5-2.8-8.4-7-9.6z m-33.9 14.1c0.7-1.4 1.1-2.9 1.1-4.5 0-4.9-3.6-9-8.3-9.8v-0.2c0-7 4-13.1 9.8-16.2 1.8 2.8 4.9 4.7 8.5 4.7s6.7-1.9 8.5-4.7c5.8 3.1 9.8 9.2 9.8 16.2v0.2c-4.7 0.8-8.3 4.9-8.3 9.8 0 1.6 0.4 3.1 1.1 4.5-3.1 2.4-6.9 3.8-11.1 3.8s-8-1.5-11.1-3.8z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(asset_relationship_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  