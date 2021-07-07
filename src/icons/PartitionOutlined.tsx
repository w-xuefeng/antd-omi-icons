// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PartitionOutlinedSvg from '@ant-design/icons-svg/lib/asn/PartitionOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-partition-outlined')
export default class PartitionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PartitionOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PartitionOutlinedSvg} />;
  };
}