// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HomeFilledSvg from '@ant-design/icons-svg/lib/asn/HomeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-home-filled')
export default class HomeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HomeFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HomeFilledSvg} />;
  };
}