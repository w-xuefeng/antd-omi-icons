// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tablet-filled')
export default class TabletFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TabletFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TabletFilledSvg}></AntdIcon>;
  };
}