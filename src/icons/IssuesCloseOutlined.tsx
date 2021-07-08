// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/es/asn/IssuesCloseOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-issues-close-outlined')
export default class IssuesCloseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'IssuesCloseOutlined';
  static tagName = 'o-issues-close-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={IssuesCloseOutlinedSvg} />;
  };
}