// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/es/asn/MoneyCollectTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-money-collect-two-tone')
export default class MoneyCollectTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MoneyCollectTwoTone';
  static tagName = 'o-money-collect-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MoneyCollectTwoToneSvg} />;
  };
}