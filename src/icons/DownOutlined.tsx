// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-down-outlined')
export default class DownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DownOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DownOutlinedSvg}></AntdIcon>;
  };
}