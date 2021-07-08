// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YuqueOutlinedSvg from '@ant-design/icons-svg/es/asn/YuqueOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-yuque-outlined')
export default class YuqueOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'YuqueOutlined';
  static tagName = 'o-yuque-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={YuqueOutlinedSvg} />;
  };
}