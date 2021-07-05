// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusBottomrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomrightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-radius-bottomright-outlined')
export default class RadiusBottomrightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusBottomrightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RadiusBottomrightOutlinedSvg}></AntdIcon>;
  };
}