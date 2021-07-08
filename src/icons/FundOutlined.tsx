// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FundOutlinedSvg from '@ant-design/icons-svg/es/asn/FundOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fund-outlined')
export default class FundOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FundOutlined';
  static tagName = 'o-fund-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FundOutlinedSvg} />;
  };
}