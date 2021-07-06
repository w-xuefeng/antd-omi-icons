// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-close-square-two-tone')
export default class CloseSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseSquareTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CloseSquareTwoToneSvg}></AntdIcon>;
  };
}