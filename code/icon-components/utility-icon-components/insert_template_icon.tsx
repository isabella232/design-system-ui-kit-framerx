
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function insert_template_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48.5 38h-4.5v-4.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v4.5h-4.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h4.5v4.5c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-4.5h4.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-14.5-8.5c0-0.8 0.7-1.5 1.5-1.5h2.5v-22c0-2.2-1.8-4-4-4h-28c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h22v-2.5c0-0.8 0.7-1.5 1.5-1.5h4.5v-4.5z m-18-18.5c0 0.6-0.4 1-1 1h-6c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h6c0.6 0 1 0.4 1 1v2z m12 16c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h18c0.6 0 1 0.4 1 1v2z m4-8c0 0.6-0.4 1-1 1h-22c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h22c0.6 0 1 0.4 1 1v2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(insert_template_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  