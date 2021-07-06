// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePptFilledSvg from '@ant-design/icons-svg/lib/asn/FilePptFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-ppt-filled')
export default class FilePptFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePptFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FilePptFilledSvg}></AntdIcon>;
  };
}