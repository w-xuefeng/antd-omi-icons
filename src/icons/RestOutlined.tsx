// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RestOutlinedSvg from '@ant-design/icons-svg/es/asn/RestOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rest-outlined')
export default class RestOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RestOutlined';
  static tagName = 'o-rest-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RestOutlinedSvg} />;
  };
}