// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-money-collect-two-tone')
export default class MoneyCollectTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MoneyCollectTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MoneyCollectTwoToneSvg}></AntdIcon>;
  };
}