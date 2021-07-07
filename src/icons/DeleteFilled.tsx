// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteFilledSvg from '@ant-design/icons-svg/lib/asn/DeleteFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-delete-filled')
export default class DeleteFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DeleteFilledSvg} />;
  };
}