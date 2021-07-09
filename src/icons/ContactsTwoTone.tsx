// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ContactsTwoToneSvg = {"name":"contacts","theme":"twotone"};

@tag('o-contacts-two-tone')
export default class ContactsTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ContactsTwoTone';
  static tagName = 'o-contacts-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ContactsTwoToneSvg} />;
  };
}