// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-phone-filled')
export default class PhoneFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PhoneFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PhoneFilledSvg} />;
  };
}