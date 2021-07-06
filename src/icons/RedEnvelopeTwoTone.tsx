// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedEnvelopeTwoToneSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-red-envelope-two-tone')
export default class RedEnvelopeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RedEnvelopeTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RedEnvelopeTwoToneSvg}></AntdIcon>;
  };
}