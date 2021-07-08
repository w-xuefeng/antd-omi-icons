// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightCircleFilledSvg from '@ant-design/icons-svg/es/asn/RightCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-right-circle-filled')
export default class RightCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RightCircleFilled';
  static tagName = 'o-right-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RightCircleFilledSvg} />;
  };
}