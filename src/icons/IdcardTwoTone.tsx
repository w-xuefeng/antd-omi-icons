// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IdcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/IdcardTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-idcard-two-tone')
export default class IdcardTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'IdcardTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={IdcardTwoToneSvg} />;
  };
}