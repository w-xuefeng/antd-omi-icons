// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-container-outlined')
export default class ContainerOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ContainerOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ContainerOutlinedSvg}></AntdIcon>;
  };
}