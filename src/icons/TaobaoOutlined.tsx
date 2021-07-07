// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TaobaoOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-taobao-outlined')
export default class TaobaoOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TaobaoOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TaobaoOutlinedSvg} />;
  };
}