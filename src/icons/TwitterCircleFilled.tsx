// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TwitterCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-twitter-circle-filled')
export default class TwitterCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TwitterCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TwitterCircleFilledSvg} />;
  };
}