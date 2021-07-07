// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fund-filled')
export default class FundFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FundFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FundFilledSvg} />;
  };
}