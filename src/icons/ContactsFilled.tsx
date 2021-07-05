// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContactsFilledSvg from '@ant-design/icons-svg/lib/asn/ContactsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-contacts-filled')
export default class ContactsFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ContactsFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ContactsFilledSvg}></AntdIcon>;
  };
}