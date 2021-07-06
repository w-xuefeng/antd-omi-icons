// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TabletTwoToneSvg from '@ant-design/icons-svg/lib/asn/TabletTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tablet-two-tone')
export default class TabletTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TabletTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TabletTwoToneSvg}></AntdIcon>;
  };
}