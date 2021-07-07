// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MoneyCollectOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-money-collect-outlined')
export default class MoneyCollectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MoneyCollectOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MoneyCollectOutlinedSvg} />;
  };
}