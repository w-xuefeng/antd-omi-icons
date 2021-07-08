// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AndroidFilledSvg from '@ant-design/icons-svg/es/asn/AndroidFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-android-filled')
export default class AndroidFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AndroidFilled';
  static tagName = 'o-android-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AndroidFilledSvg} />;
  };
}