// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ApiOutlinedSvg from '@ant-design/icons-svg/es/asn/ApiOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-api-outlined')
export default class ApiOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ApiOutlined';
  static tagName = 'o-api-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ApiOutlinedSvg} />;
  };
}