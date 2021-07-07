// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-filled')
export default class FileFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileFilledSvg} />;
  };
}