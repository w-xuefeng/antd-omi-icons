// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BugOutlinedSvg from '@ant-design/icons-svg/es/asn/BugOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bug-outlined')
export default class BugOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BugOutlined';
  static tagName = 'o-bug-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BugOutlinedSvg} />;
  };
}