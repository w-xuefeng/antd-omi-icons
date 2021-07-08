// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WarningTwoToneSvg from '@ant-design/icons-svg/es/asn/WarningTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-warning-two-tone')
export default class WarningTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'WarningTwoTone';
  static tagName = 'o-warning-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WarningTwoToneSvg} />;
  };
}