// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EditFilledSvg from '@ant-design/icons-svg/es/asn/EditFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-edit-filled')
export default class EditFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EditFilled';
  static tagName = 'o-edit-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EditFilledSvg} />;
  };
}