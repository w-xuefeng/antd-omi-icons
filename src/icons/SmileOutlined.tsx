// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SmileOutlinedSvg from '@ant-design/icons-svg/es/asn/SmileOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-smile-outlined')
export default class SmileOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SmileOutlined';
  static tagName = 'o-smile-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SmileOutlinedSvg} />;
  };
}