// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ControlFilledSvg from '@ant-design/icons-svg/es/asn/ControlFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-control-filled')
export default class ControlFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ControlFilled';
  static tagName = 'o-control-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ControlFilledSvg} />;
  };
}