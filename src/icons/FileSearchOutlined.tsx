// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileSearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-search-outlined')
export default class FileSearchOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileSearchOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileSearchOutlinedSvg} />;
  };
}