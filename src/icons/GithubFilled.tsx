// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-github-filled')
export default class GithubFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GithubFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GithubFilledSvg} />;
  };
}