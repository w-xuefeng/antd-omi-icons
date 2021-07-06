// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LikeFilledSvg from '@ant-design/icons-svg/lib/asn/LikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-like-filled')
export default class LikeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LikeFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LikeFilledSvg}></AntdIcon>;
  };
}