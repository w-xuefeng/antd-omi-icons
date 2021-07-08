// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BuildOutlinedSvg from '@ant-design/icons-svg/es/asn/BuildOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-build-outlined')
export default class BuildOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BuildOutlined';
  static tagName = 'o-build-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BuildOutlinedSvg} />;
  };
}