// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InstagramFilledSvg from '@ant-design/icons-svg/es/asn/InstagramFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-instagram-filled')
export default class InstagramFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InstagramFilled';
  static tagName = 'o-instagram-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InstagramFilledSvg} />;
  };
}