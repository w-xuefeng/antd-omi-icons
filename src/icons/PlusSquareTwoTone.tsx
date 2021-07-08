// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/PlusSquareTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-plus-square-two-tone')
export default class PlusSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusSquareTwoTone';
  static tagName = 'o-plus-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlusSquareTwoToneSvg} />;
  };
}