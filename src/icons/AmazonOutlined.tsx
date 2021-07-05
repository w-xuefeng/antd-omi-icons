// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AmazonOutlinedSvg from '@ant-design/icons-svg/lib/asn/AmazonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-amazon-outlined')
export default class AmazonOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AmazonOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AmazonOutlinedSvg}></AntdIcon>;
  };
}