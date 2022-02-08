
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_account_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m50 26.9c0.1-1.7-1.2-2.2-1.7-2.2h-18c-1.6 0-1.8 1.7-1.8 1.8v19.5h21.5v-19.1z m-12.4 14c0 0.9-0.7 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m0-8.5c0 0.9-0.7 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m8.3 8.5c0 0.9-0.7 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m0-8.5c0 0.9-0.7 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m-12.5-14.5v-9.7c0.1-1.7-1.1-2.2-1.6-2.2h-28c-1.6 0-1.8 1.7-1.8 1.8v38.2h21.5v-24.4s0-2 1.8-2h6.5c1 0 1.6-1 1.6-1.7z m-22.3 22.2c0 0.9-0.7 1.7-1.7 1.7h-1.6c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m0-8.6c0 0.9-0.7 1.7-1.7 1.7h-1.6c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m0-8.5c0 0.9-0.7 1.7-1.7 1.7h-1.6c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m0-8.5c0 0.9-0.7 1.7-1.7 1.7h-1.6c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m9.1 25.6c0 0.9-0.7 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m0-8.6c0 0.9-0.7 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m0-8.5c0 0.9-0.7 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m0-8.5c0 0.9-0.7 1.7-1.7 1.7h-1.7c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z m9.1 0c0 0.9-0.7 1.7-1.7 1.7h-1.6c-0.9 0-1.7-0.8-1.7-1.7v-1.7c0-0.9 0.7-1.7 1.7-1.7h1.7c0.9 0 1.7 0.8 1.7 1.7v1.7z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_account_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  