// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContactsFilledSvg from '@ant-design/icons-svg/es/asn/ContactsFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-contacts-filled')
export default class ContactsFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ContactsFilled';
  static tagName = 'o-contacts-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ContactsFilledSvg} />;
  };
}