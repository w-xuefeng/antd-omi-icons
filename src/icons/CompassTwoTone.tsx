// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-compass-two-tone')
export default class CompassTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CompassTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CompassTwoToneSvg} />;
  };
}