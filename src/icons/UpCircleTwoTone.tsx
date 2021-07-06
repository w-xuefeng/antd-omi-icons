// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-up-circle-two-tone')
export default class UpCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UpCircleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UpCircleTwoToneSvg}></AntdIcon>;
  };
}