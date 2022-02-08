
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function flash_icon(props) {
  return (
    <svg height="64" width="56" viewBox="0 0 56 64" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3h-32z" fill="#E53C3C" fillRule="evenodd"/>
	<path d="m17.5 43.1h-5.9v3.9h5.7c0.4 0 0.7 0.3 0.7 0.7 0 0.3-0.3 0.6-0.7 0.6h-5.7v4.9c0 0.4-0.3 0.7-0.7 0.7-0.4 0-0.8-0.3-0.8-0.7v-10.3c0-0.6 0.5-1.1 1.1-1.1h6.3c0.3 0 0.6 0.3 0.6 0.7 0 0.3-0.3 0.6-0.6 0.6z m9.5 10.7h-5.4c-0.6 0-1.1-0.5-1.1-1.1v-10.3c0-0.4 0.3-0.7 0.8-0.7 0.4 0 0.7 0.3 0.7 0.7v10.1h5c0.4 0 0.7 0.2 0.7 0.6 0 0.4-0.3 0.7-0.7 0.7z m12.2 0.1c-0.3 0-0.5-0.2-0.7-0.5l-0.9-2.3h-6l-0.9 2.3c-0.1 0.3-0.4 0.5-0.7 0.5-0.4 0-0.8-0.4-0.8-0.8 0-0.1 0-0.2 0.1-0.3l4.1-10.3c0.2-0.5 0.7-0.8 1.2-0.8 0.6 0 1 0.3 1.2 0.8l4.2 10.3c0 0.1 0.1 0.2 0.1 0.3 0 0.4-0.4 0.8-0.9 0.8z m-4.6-10.6l-2.5 6.5h5.1l-2.6-6.5z" fill={props.fill}/>
	<g fillRule="evenodd">
		<path d="m56 20.3v1h-12.8s-6.3-1.2-6.2-6.7c0 0 0.2 5.7 6 5.7h13z" fill="#DE2D2D"/>
		<path d="m37.1 0v14.6c0 1.6 1.1 5.7 6.1 5.7h12.8l-18.9-20.3z" fill={props.fill} opacity=".5"/>
	</g>
</svg>
  );
};

addPropertyControls(flash_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  