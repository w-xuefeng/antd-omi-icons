// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ci-two-tone')
export default class CiTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CiTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CiTwoToneSvg}></AntdIcon>;
  };
}