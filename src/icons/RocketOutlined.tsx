// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RocketOutlinedSvg from '@ant-design/icons-svg/lib/asn/RocketOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rocket-outlined')
export default class RocketOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RocketOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RocketOutlinedSvg}></AntdIcon>;
  };
}