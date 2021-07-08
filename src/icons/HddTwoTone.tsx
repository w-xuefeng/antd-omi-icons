// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HddTwoToneSvg from '@ant-design/icons-svg/es/asn/HddTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-hdd-two-tone')
export default class HddTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HddTwoTone';
  static tagName = 'o-hdd-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HddTwoToneSvg} />;
  };
}