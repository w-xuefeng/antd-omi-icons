// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IdcardFilledSvg from '@ant-design/icons-svg/lib/asn/IdcardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-idcard-filled')
export default class IdcardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'IdcardFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={IdcardFilledSvg}></AntdIcon>;
  };
}