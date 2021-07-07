// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-environment-filled')
export default class EnvironmentFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EnvironmentFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EnvironmentFilledSvg} />;
  };
}