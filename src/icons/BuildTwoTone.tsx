// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BuildTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuildTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-build-two-tone')
export default class BuildTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BuildTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BuildTwoToneSvg} />;
  };
}