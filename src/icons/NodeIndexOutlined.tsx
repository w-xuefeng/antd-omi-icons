// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NodeIndexOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeIndexOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-node-index-outlined')
export default class NodeIndexOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NodeIndexOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={NodeIndexOutlinedSvg}></AntdIcon>;
  };
}