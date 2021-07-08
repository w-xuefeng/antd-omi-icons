// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeFilledSvg from '@ant-design/icons-svg/es/asn/EyeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-eye-filled')
export default class EyeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeFilled';
  static tagName = 'o-eye-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EyeFilledSvg} />;
  };
}