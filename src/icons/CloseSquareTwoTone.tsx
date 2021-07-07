// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseSquareTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-close-square-two-tone')
export default class CloseSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseSquareTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseSquareTwoToneSvg} />;
  };
}