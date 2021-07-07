// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarryOutFilledSvg from '@ant-design/icons-svg/lib/asn/CarryOutFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-carry-out-filled')
export default class CarryOutFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CarryOutFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CarryOutFilledSvg} />;
  };
}