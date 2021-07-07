// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteRowOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteRowOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-delete-row-outlined')
export default class DeleteRowOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteRowOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DeleteRowOutlinedSvg} />;
  };
}