// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FundViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundViewOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fund-view-outlined')
export default class FundViewOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FundViewOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FundViewOutlinedSvg} />;
  };
}