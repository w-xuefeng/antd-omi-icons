// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TabletOutlinedSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tablet-outlined')
export default class TabletOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TabletOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TabletOutlinedSvg}></AntdIcon>;
  };
}