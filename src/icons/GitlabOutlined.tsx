// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GitlabOutlinedSvg from '@ant-design/icons-svg/es/asn/GitlabOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-gitlab-outlined')
export default class GitlabOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GitlabOutlined';
  static tagName = 'o-gitlab-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GitlabOutlinedSvg} />;
  };
}