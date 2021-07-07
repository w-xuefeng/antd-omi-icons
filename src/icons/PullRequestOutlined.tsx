// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PullRequestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PullRequestOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pull-request-outlined')
export default class PullRequestOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PullRequestOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PullRequestOutlinedSvg} />;
  };
}