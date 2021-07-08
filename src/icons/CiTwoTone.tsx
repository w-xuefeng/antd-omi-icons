// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiTwoToneSvg from '@ant-design/icons-svg/es/asn/CiTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ci-two-tone')
export default class CiTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CiTwoTone';
  static tagName = 'o-ci-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CiTwoToneSvg} />;
  };
}