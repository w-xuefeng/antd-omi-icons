// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EnvironmentOutlinedSvg from '@ant-design/icons-svg/es/asn/EnvironmentOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-environment-outlined')
export default class EnvironmentOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EnvironmentOutlined';
  static tagName = 'o-environment-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EnvironmentOutlinedSvg} />;
  };
}