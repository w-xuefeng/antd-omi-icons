// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WomanOutlinedSvg from '@ant-design/icons-svg/lib/asn/WomanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-woman-outlined')
export default class WomanOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WomanOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={WomanOutlinedSvg}></AntdIcon>;
  };
}