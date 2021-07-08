// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZhihuCircleFilledSvg from '@ant-design/icons-svg/es/asn/ZhihuCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-zhihu-circle-filled')
export default class ZhihuCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ZhihuCircleFilled';
  static tagName = 'o-zhihu-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ZhihuCircleFilledSvg} />;
  };
}