// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MoneyCollectOutlinedSvg from '@ant-design/icons-svg/es/asn/MoneyCollectOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-money-collect-outlined')
export default class MoneyCollectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MoneyCollectOutlined';
  static tagName = 'o-money-collect-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MoneyCollectOutlinedSvg} />;
  };
}