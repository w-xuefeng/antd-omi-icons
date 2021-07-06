// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EditTwoToneSvg from '@ant-design/icons-svg/lib/asn/EditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-edit-two-tone')
export default class EditTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EditTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EditTwoToneSvg}></AntdIcon>;
  };
}