// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyFilledSvg from '@ant-design/icons-svg/es/asn/CopyFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-copy-filled')
export default class CopyFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyFilled';
  static tagName = 'o-copy-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyFilledSvg} />;
  };
}