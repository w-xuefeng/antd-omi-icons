// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ZhihuCircleFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-90.7 477.8l-.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6l24-18.1 71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-.1c-8.9 29-20.1 57.3-33.3 84.7-22.6 45.7-55.2 54.7-89.5 57.7-34.4 3-23.3-5.3-23.3-5.3 68-55.5 78-87.8 96.8-123.1 11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1-7 3.4-23.6 7.1-21.1 0 2.6-7.1 27-46.2 43.2-110.7 16.3-64.6 63.9-62 63.9-62-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7H421.3zm346.5 167h-87.6l-69.5 46.6-16.4-46.6h-40.1V321.5h213.6v387.3zM408.2 611s0-.1 0 0zm216 94.3l56.8-38.1h45.6-.1V364.7H596.7v302.5h14.1z"}}]},"name":"zhihu-circle","theme":"filled"};

@tag('o-zhihu-circle-filled')
export default class ZhihuCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ZhihuCircleFilled';
  static tagName = 'o-zhihu-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={ZhihuCircleFilledSvg} />;
  };
}