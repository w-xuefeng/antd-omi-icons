// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IdcardOutlinedSvg from '@ant-design/icons-svg/es/asn/IdcardOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-idcard-outlined')
export default class IdcardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'IdcardOutlined';
  static tagName = 'o-idcard-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={IdcardOutlinedSvg} />;
  };
}