// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-environment-two-tone')
export default class EnvironmentTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EnvironmentTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EnvironmentTwoToneSvg} />;
  };
}