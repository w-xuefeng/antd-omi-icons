// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-skype-filled')
export default class SkypeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SkypeFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SkypeFilledSvg} />;
  };
}