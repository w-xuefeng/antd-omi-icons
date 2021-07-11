// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DribbbleCircleFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M675.1 328.3a245.2 245.2 0 00-220.8-55.1c6.8 9.1 51.5 69.9 91.8 144 87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6 41.7 32.5 94.1 51.9 151 51.9 34.1 0 66.6-6.9 96.1-19.5-3.7-21.6-17.9-96.8-52.5-186.6l-1.6.6zm47.7-11.9c32.2 88.4 45.3 160.4 47.8 175.4 55.2-37.3 94.5-96.4 105.4-164.9-8.4-2.6-76.1-22.8-153.2-10.5zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 736c-158.8 0-288-129.2-288-288s129.2-288 288-288 288 129.2 288 288-129.2 288-288 288zm53.1-346.2c5.7 11.7 11.2 23.6 16.3 35.6 1.8 4.2 3.6 8.4 5.3 12.7 81.8-10.3 163.2 6.2 171.3 7.9-.5-58.1-21.3-111.4-55.5-153.3-5.3 7.1-46.5 60-137.4 97.1zM498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3-68.8 32.5-120.3 95.9-136.2 172.2 11 .2 112.4.7 227.4-29.9zm30.6 82.5c3.2-1 6.4-2 9.7-2.9-6.2-14-12.9-28-19.9-41.7-122.8 36.8-242.1 35.2-252.8 35-.1 2.5-.1 5-.1 7.5 0 63.2 23.9 120.9 63.2 164.5 5.5-9.6 73-121.4 199.9-162.4z"}}]},"name":"dribbble-circle","theme":"filled"};

@tag('o-dribbble-circle-filled')
export default class DribbbleCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DribbbleCircleFilled';
  static tagName = 'o-dribbble-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={DribbbleCircleFilledSvg} />;
  };
}