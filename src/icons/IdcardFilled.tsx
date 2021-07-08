// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IdcardFilledSvg from '@ant-design/icons-svg/es/asn/IdcardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-idcard-filled')
export default class IdcardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'IdcardFilled';
  static tagName = 'o-idcard-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={IdcardFilledSvg} />;
  };
}