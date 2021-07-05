// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FundTwoToneSvg from '@ant-design/icons-svg/lib/asn/FundTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fund-two-tone')
export default class FundTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FundTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FundTwoToneSvg}></AntdIcon>;
  };
}