// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteTwoToneSvg from '@ant-design/icons-svg/es/asn/DeleteTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-delete-two-tone')
export default class DeleteTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteTwoTone';
  static tagName = 'o-delete-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DeleteTwoToneSvg} />;
  };
}