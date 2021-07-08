// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusOutlinedSvg from '@ant-design/icons-svg/es/asn/PlusOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-plus-outlined')
export default class PlusOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusOutlined';
  static tagName = 'o-plus-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlusOutlinedSvg} />;
  };
}