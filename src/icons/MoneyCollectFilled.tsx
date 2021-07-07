// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MoneyCollectFilledSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-money-collect-filled')
export default class MoneyCollectFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MoneyCollectFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MoneyCollectFilledSvg} />;
  };
}