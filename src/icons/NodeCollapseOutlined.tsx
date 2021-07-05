// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NodeCollapseOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeCollapseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-node-collapse-outlined')
export default class NodeCollapseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NodeCollapseOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={NodeCollapseOutlinedSvg}></AntdIcon>;
  };
}