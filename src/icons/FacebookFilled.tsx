// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FacebookFilledSvg from '@ant-design/icons-svg/es/asn/FacebookFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-facebook-filled')
export default class FacebookFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FacebookFilled';
  static tagName = 'o-facebook-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FacebookFilledSvg} />;
  };
}