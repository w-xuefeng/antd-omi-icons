// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppstoreTwoToneSvg from '@ant-design/icons-svg/lib/asn/AppstoreTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-appstore-two-tone')
export default class AppstoreTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'AppstoreTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AppstoreTwoToneSvg}></AntdIcon>;
  };
}