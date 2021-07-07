// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SkypeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkypeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-skype-outlined')
export default class SkypeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SkypeOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SkypeOutlinedSvg} />;
  };
}