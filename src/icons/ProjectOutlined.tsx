// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProjectOutlinedSvg from '@ant-design/icons-svg/es/asn/ProjectOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-project-outlined')
export default class ProjectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ProjectOutlined';
  static tagName = 'o-project-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ProjectOutlinedSvg} />;
  };
}