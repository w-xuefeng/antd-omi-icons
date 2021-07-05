// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusUprightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUprightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-radius-upright-outlined')
export default class RadiusUprightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusUprightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RadiusUprightOutlinedSvg}></AntdIcon>;
  };
}