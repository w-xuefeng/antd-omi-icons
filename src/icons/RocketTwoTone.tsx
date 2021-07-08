// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RocketTwoToneSvg from '@ant-design/icons-svg/es/asn/RocketTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rocket-two-tone')
export default class RocketTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RocketTwoTone';
  static tagName = 'o-rocket-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RocketTwoToneSvg} />;
  };
}