// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CompassOutlinedSvg from '@ant-design/icons-svg/es/asn/CompassOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-compass-outlined')
export default class CompassOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CompassOutlined';
  static tagName = 'o-compass-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CompassOutlinedSvg} />;
  };
}