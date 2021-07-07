// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-container-outlined')
export default class ContainerOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ContainerOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ContainerOutlinedSvg} />;
  };
}