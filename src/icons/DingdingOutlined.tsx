// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dingding-outlined')
export default class DingdingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DingdingOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DingdingOutlinedSvg}></AntdIcon>;
  };
}