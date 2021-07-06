// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TaobaoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-taobao-circle-filled')
export default class TaobaoCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TaobaoCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TaobaoCircleFilledSvg}></AntdIcon>;
  };
}