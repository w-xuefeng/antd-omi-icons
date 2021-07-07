// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DribbbleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dribbble-circle-filled')
export default class DribbbleCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DribbbleCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DribbbleCircleFilledSvg} />;
  };
}