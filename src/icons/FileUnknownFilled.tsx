// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileUnknownFilledSvg from '@ant-design/icons-svg/lib/asn/FileUnknownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-unknown-filled')
export default class FileUnknownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileUnknownFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileUnknownFilledSvg}></AntdIcon>;
  };
}