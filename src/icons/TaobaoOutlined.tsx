// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TaobaoOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-taobao-outlined')
export default class TaobaoOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TaobaoOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TaobaoOutlinedSvg}></AntdIcon>;
  };
}