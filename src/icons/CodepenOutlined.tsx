// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodepenOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-codepen-outlined')
export default class CodepenOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CodepenOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodepenOutlinedSvg} />;
  };
}