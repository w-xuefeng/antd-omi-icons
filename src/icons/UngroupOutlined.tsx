// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UngroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/UngroupOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ungroup-outlined')
export default class UngroupOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UngroupOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UngroupOutlinedSvg} />;
  };
}