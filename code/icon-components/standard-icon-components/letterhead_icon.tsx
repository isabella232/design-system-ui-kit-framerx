
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function letterhead_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73.8 20h-47.6c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2v-47.6c0-3.4-2.8-6.2-6.2-6.2z m-2.8 49.1c0 0.8-0.8 1.4-1.6 1.4h-38.9c-0.8 0-1.4-0.8-1.4-1.6v-9c0-0.8 0.8-1.4 1.6-1.4h38.9c0.8 0 1.4 0.8 1.4 1.6v9z m0-29.2c0 0.8-0.8 1.4-1.6 1.4h-38.9c-0.8 0-1.4-0.8-1.4-1.6v-9c0-0.8 0.8-1.4 1.6-1.4h38.9c0.8 0 1.4 0.8 1.4 1.6v9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(letterhead_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  