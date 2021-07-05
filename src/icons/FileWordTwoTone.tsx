// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileWordTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-word-two-tone')
export default class FileWordTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileWordTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileWordTwoToneSvg}></AntdIcon>;
  };
}