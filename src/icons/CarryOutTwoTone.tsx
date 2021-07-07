// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarryOutTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarryOutTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-carry-out-two-tone')
export default class CarryOutTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CarryOutTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CarryOutTwoToneSvg} />;
  };
}