// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-add-filled')
export default class FileAddFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileAddFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileAddFilledSvg}></AntdIcon>;
  };
}