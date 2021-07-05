// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PartitionOutlinedSvg from '@ant-design/icons-svg/lib/asn/PartitionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-partition-outlined')
export default class PartitionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PartitionOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PartitionOutlinedSvg}></AntdIcon>;
  };
}