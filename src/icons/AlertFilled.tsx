// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlertFilledSvg from '@ant-design/icons-svg/es/asn/AlertFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-alert-filled')
export default class AlertFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AlertFilled';
  static tagName = 'o-alert-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlertFilledSvg} />;
  };
}