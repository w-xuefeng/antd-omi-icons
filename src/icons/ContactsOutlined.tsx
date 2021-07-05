// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContactsOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContactsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-contacts-outlined')
export default class ContactsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ContactsOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ContactsOutlinedSvg}></AntdIcon>;
  };
}