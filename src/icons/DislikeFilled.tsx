// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DislikeFilledSvg from '@ant-design/icons-svg/lib/asn/DislikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dislike-filled')
export default class DislikeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DislikeFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DislikeFilledSvg}></AntdIcon>;
  };
}