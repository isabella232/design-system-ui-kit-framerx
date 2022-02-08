
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function sentiment_negative_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 2c-13.2 0-24 10.8-24 24.1s10.8 24.1 24 24.1 24-10.8 24-24.1-10.8-24.1-24-24.1z m-9 13c1.7 0 3 1.8 3 4s-1.3 4-3 4-3-1.8-3-4 1.3-4 3-4z m-3 23.7c0.5-6.1 5-11.2 12.1-11.2 7 0 11.4 5.1 11.9 11.2h-24z m21-15.7c-1.7 0-3-1.8-3-4s1.3-4 3-4 3 1.8 3 4-1.3 4-3 4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(sentiment_negative_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  