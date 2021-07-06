// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-right-circle-two-tone')
export default class RightCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RightCircleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RightCircleTwoToneSvg}></AntdIcon>;
  };
}