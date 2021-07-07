// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileUnknownFilledSvg from '@ant-design/icons-svg/lib/asn/FileUnknownFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-unknown-filled')
export default class FileUnknownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileUnknownFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileUnknownFilledSvg} />;
  };
}