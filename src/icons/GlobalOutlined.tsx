// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GlobalOutlinedSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-global-outlined')
export default class GlobalOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GlobalOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={GlobalOutlinedSvg}></AntdIcon>;
  };
}