// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileProtectOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileProtectOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-protect-outlined')
export default class FileProtectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileProtectOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileProtectOutlinedSvg} />;
  };
}