// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ApiTwoToneSvg: AntdIconProps['icon'] = {"name":"api","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M148.2 674.6zm106.7-92.3c-25 25-38.7 58.1-38.7 93.4s13.8 68.5 38.7 93.4c25 25 58.1 38.7 93.4 38.7 35.3 0 68.5-13.8 93.4-38.7l59.4-59.4-186.8-186.8-59.4 59.4zm420.8-366.1c-35.3 0-68.5 13.8-93.4 38.7l-59.4 59.4 186.8 186.8 59.4-59.4c24.9-25 38.7-58.1 38.7-93.4s-13.8-68.5-38.7-93.4c-25-25-58.1-38.7-93.4-38.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M578.9 546.7a8.03 8.03 0 00-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 00-11.3 0L363 475.3l-43-43a7.85 7.85 0 00-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2a199.45 199.45 0 00-58.6 140.4c-.2 39.5 11.2 79.1 34.3 113.1l-76.1 76.1a8.03 8.03 0 000 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 01-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7-24.9-24.9-38.7-58.1-38.7-93.4s13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4zm476-620.3l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 00-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 000 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7s68.4 13.7 93.4 38.7c24.9 24.9 38.7 58.1 38.7 93.4s-13.8 68.4-38.7 93.4z", "fill": primaryColor } }] }; }};

@tag('o-api-two-tone')
export default class ApiTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ApiTwoTone';
  static tagName = 'o-api-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={ApiTwoToneSvg} />;
  };
}