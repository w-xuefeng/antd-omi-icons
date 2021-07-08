// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/UpCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-up-circle-two-tone')
export default class UpCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UpCircleTwoTone';
  static tagName = 'o-up-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UpCircleTwoToneSvg} />;
  };
}