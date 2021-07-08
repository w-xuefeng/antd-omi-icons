// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/CiCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ci-circle-two-tone')
export default class CiCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CiCircleTwoTone';
  static tagName = 'o-ci-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CiCircleTwoToneSvg} />;
  };
}