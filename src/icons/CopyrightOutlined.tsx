// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyrightOutlinedSvg from '@ant-design/icons-svg/es/asn/CopyrightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-copyright-outlined')
export default class CopyrightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightOutlined';
  static tagName = 'o-copyright-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyrightOutlinedSvg} />;
  };
}