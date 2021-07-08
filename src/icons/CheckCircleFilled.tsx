// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CheckCircleFilledSvg from '@ant-design/icons-svg/es/asn/CheckCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-check-circle-filled')
export default class CheckCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CheckCircleFilled';
  static tagName = 'o-check-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CheckCircleFilledSvg} />;
  };
}