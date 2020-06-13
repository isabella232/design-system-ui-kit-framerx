
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function campaign_members_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m100 62v38h-38l38-38z m-7.8 27.6c-1.3-0.5-1.5-1-1.5-1.6 0-0.5 0.4-1 0.8-1.4 0.8-0.7 1.2-1.6 1.2-2.7 0-2.1-1.3-3.8-3.7-3.8s-3.7 1.8-3.7 3.8c0 1.1 0.4 2.1 1.2 2.7 0.4 0.4 0.8 0.9 0.8 1.4s-0.2 1-1.5 1.6c-1.9 0.8-3.8 1.7-3.8 3.4 0 1.1 0.9 2.1 2 2.1h10c1.1 0 2-1 2-2.1 0-1.8-1.9-2.7-3.8-3.4z" fill={props.fill} fillOpacity=".65"/>
	<path d="m50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z m0 54c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z m0-42c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18z m0 30c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z m0-18c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(campaign_members_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  