// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-edit-filled')
export default class EditFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EditFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EditFilledSvg} />;
  };
}