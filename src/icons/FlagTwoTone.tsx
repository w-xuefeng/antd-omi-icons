// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FlagTwoToneSvg from '@ant-design/icons-svg/es/asn/FlagTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-flag-two-tone')
export default class FlagTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FlagTwoTone';
  static tagName = 'o-flag-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FlagTwoToneSvg} />;
  };
}