// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteColumnOutlinedSvg from '@ant-design/icons-svg/es/asn/DeleteColumnOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-delete-column-outlined')
export default class DeleteColumnOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteColumnOutlined';
  static tagName = 'o-delete-column-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DeleteColumnOutlinedSvg} />;
  };
}