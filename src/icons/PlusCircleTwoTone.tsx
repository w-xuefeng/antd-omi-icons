// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/PlusCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-plus-circle-two-tone')
export default class PlusCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusCircleTwoTone';
  static tagName = 'o-plus-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlusCircleTwoToneSvg} />;
  };
}