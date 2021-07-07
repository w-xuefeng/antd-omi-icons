// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TaobaoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-taobao-circle-outlined')
export default class TaobaoCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TaobaoCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TaobaoCircleOutlinedSvg} />;
  };
}