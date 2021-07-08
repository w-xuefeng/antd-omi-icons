// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import Html5TwoToneSvg from '@ant-design/icons-svg/es/asn/Html5TwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-html5-two-tone')
export default class Html5TwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'Html5TwoTone';
  static tagName = 'o-html5-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={Html5TwoToneSvg} />;
  };
}