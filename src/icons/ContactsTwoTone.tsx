// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-contacts-two-tone')
export default class ContactsTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ContactsTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ContactsTwoToneSvg}></AntdIcon>;
  };
}