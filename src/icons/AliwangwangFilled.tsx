// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AliwangwangFilledSvg from '@ant-design/icons-svg/lib/asn/AliwangwangFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-aliwangwang-filled')
export default class AliwangwangFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AliwangwangFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AliwangwangFilledSvg}></AntdIcon>;
  };
}