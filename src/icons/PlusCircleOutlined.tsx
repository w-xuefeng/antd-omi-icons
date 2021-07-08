// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/PlusCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-plus-circle-outlined')
export default class PlusCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusCircleOutlined';
  static tagName = 'o-plus-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlusCircleOutlinedSvg} />;
  };
}