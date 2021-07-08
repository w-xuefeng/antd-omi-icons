// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WomanOutlinedSvg from '@ant-design/icons-svg/es/asn/WomanOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-woman-outlined')
export default class WomanOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WomanOutlined';
  static tagName = 'o-woman-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WomanOutlinedSvg} />;
  };
}