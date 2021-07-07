// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftCircleFilledSvg from '@ant-design/icons-svg/lib/asn/LeftCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-left-circle-filled')
export default class LeftCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LeftCircleFilledSvg} />;
  };
}