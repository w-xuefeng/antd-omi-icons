// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NodeExpandOutlinedSvg from '@ant-design/icons-svg/es/asn/NodeExpandOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-node-expand-outlined')
export default class NodeExpandOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NodeExpandOutlined';
  static tagName = 'o-node-expand-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={NodeExpandOutlinedSvg} />;
  };
}