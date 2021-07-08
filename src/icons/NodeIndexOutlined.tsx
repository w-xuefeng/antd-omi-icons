// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NodeIndexOutlinedSvg from '@ant-design/icons-svg/es/asn/NodeIndexOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-node-index-outlined')
export default class NodeIndexOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NodeIndexOutlined';
  static tagName = 'o-node-index-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={NodeIndexOutlinedSvg} />;
  };
}