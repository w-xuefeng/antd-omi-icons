// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SubnodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SubnodeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-subnode-outlined')
export default class SubnodeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SubnodeOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SubnodeOutlinedSvg} />;
  };
}