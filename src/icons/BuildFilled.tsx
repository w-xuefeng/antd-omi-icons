// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BuildFilledSvg from '@ant-design/icons-svg/es/asn/BuildFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-build-filled')
export default class BuildFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BuildFilled';
  static tagName = 'o-build-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BuildFilledSvg} />;
  };
}