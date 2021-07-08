// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedEnvelopeFilledSvg from '@ant-design/icons-svg/es/asn/RedEnvelopeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-red-envelope-filled')
export default class RedEnvelopeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RedEnvelopeFilled';
  static tagName = 'o-red-envelope-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RedEnvelopeFilledSvg} />;
  };
}