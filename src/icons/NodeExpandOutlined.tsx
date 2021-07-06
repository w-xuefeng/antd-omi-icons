// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NodeExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeExpandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-node-expand-outlined')
export default class NodeExpandOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NodeExpandOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={NodeExpandOutlinedSvg}></AntdIcon>;
  };
}