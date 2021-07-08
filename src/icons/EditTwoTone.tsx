// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EditTwoToneSvg from '@ant-design/icons-svg/es/asn/EditTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-edit-two-tone')
export default class EditTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EditTwoTone';
  static tagName = 'o-edit-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EditTwoToneSvg} />;
  };
}