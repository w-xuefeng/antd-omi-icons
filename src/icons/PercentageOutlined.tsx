// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PercentageOutlinedSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-percentage-outlined')
export default class PercentageOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PercentageOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PercentageOutlinedSvg}></AntdIcon>;
  };
}