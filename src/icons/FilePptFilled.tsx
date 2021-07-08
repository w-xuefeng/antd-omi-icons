// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePptFilledSvg from '@ant-design/icons-svg/es/asn/FilePptFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-ppt-filled')
export default class FilePptFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePptFilled';
  static tagName = 'o-file-ppt-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilePptFilledSvg} />;
  };
}