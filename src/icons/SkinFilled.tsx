// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-skin-filled')
export default class SkinFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SkinFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SkinFilledSvg} />;
  };
}