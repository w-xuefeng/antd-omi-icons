// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-cloud-two-tone')
export default class CloudTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CloudTwoToneSvg}></AntdIcon>;
  };
}