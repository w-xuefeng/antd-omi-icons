// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderOpenFilledSvg from '@ant-design/icons-svg/lib/asn/FolderOpenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-open-filled')
export default class FolderOpenFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderOpenFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FolderOpenFilledSvg}></AntdIcon>;
  };
}