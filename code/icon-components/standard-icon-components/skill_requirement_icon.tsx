
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function skill_requirement_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m50.1 57.9a6.8 6.8 0 1 1 6.6-6.8 6.7 6.7 0 0 1-6.6 6.8z m30.7-11.3h-5.6v-19.9a6.8 6.8 0 0 0-6.7-6.7h-37a6.8 6.8 0 0 0-6.7 6.7v19.9h-5.6a3.4 3.4 0 0 0 0 6.8h5.6v19.9a6.8 6.8 0 0 0 6.7 6.7h37a6.8 6.8 0 0 0 6.7-6.7v-19.9h5.6a3.4 3.4 0 0 0 0-6.8z m-14.1 12.8l-1.2 2a2.7 2.7 0 0 1-2.1 1.2 2.8 2.8 0 0 1-0.9-0.2l-3.2-1.3a14 14 0 0 1-4.7 2.8l-0.6 3.7a2.5 2.5 0 0 1-2.4 2.1h-2.4a2.5 2.5 0 0 1-2.5-2.1l-0.6-3.7a12.1 12.1 0 0 1-4.5-2.6l-3.4 1.3a2.8 2.8 0 0 1-0.8 0.2 2.5 2.5 0 0 1-2.2-1.3l-1.2-2.1a2.5 2.5 0 0 1 0.6-3.1l2.8-2.4a13.3 13.3 0 0 1-0.3-2.7 12.4 12.4 0 0 1 0.3-2.6l-2.8-2.4a2.5 2.5 0 0 1-0.6-3.2l1.2-2.1a2.4 2.4 0 0 1 2.1-1.3 2.8 2.8 0 0 1 0.9 0.2l3.4 1.3a13.9 13.9 0 0 1 4.5-2.7l0.6-3.4a2.3 2.3 0 0 1 2.5-2h2.4a2.4 2.4 0 0 1 2.4 1.9l0.6 3.5a13.6 13.6 0 0 1 4.5 2.6l3.4-1.3a2.8 2.8 0 0 1 0.9-0.2 2.5 2.5 0 0 1 2.1 1.3l1.2 2.1a2.6 2.6 0 0 1-0.6 3.2l-2.8 2.4a12.6 12.6 0 0 1 0.3 2.7 12.4 12.4 0 0 1-0.3 2.6l2.8 2.3a2.6 2.6 0 0 1 0.6 3.3z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(skill_requirement_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  