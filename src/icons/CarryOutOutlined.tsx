// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarryOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarryOutOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-carry-out-outlined')
export default class CarryOutOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CarryOutOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CarryOutOutlinedSvg} />;
  };
}