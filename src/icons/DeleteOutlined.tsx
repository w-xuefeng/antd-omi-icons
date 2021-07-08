// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteOutlinedSvg from '@ant-design/icons-svg/es/asn/DeleteOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-delete-outlined')
export default class DeleteOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteOutlined';
  static tagName = 'o-delete-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DeleteOutlinedSvg} />;
  };
}