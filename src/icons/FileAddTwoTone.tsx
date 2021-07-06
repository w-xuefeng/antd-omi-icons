// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-add-two-tone')
export default class FileAddTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileAddTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileAddTwoToneSvg}></AntdIcon>;
  };
}