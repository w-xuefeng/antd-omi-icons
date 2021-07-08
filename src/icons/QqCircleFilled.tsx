// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QqCircleFilledSvg from '@ant-design/icons-svg/es/asn/QqCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-qq-circle-filled')
export default class QqCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'QqCircleFilled';
  static tagName = 'o-qq-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={QqCircleFilledSvg} />;
  };
}