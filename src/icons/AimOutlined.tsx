// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AimOutlinedSvg from '@ant-design/icons-svg/es/asn/AimOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-aim-outlined')
export default class AimOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AimOutlined';
  static tagName = 'o-aim-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AimOutlinedSvg} />;
  };
}